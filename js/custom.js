(function() {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function() {
    var state = burger.getAttribute("aria-expanded"); 
    if (state=='true')  {
    state = "false"
    } else {
    state = "true"
    }
    burger.setAttribute("aria-expanded", state);
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");   
  });



})();


var navTabs = document.querySelectorAll("#nav li");
navTabs.forEach(function(navEl, index) {  
  navEl.addEventListener('keydown', e => {
    //keycodes:
    // 35 end
    // 36 home
    // 37 left
    // 39 right

    if (e.keyCode == 35 || e.keyCode == 36  || e.keyCode == 37 || e.keyCode == 39) {
       navEl.classList.remove("is-active");
       navEl.childNodes[1].setAttribute('tabindex', -1);
       var nextNavElement;       
       if (e.keyCode == 39) {
          nextNavElement = navTabs[index + 1];
       }
       if (e.keyCode == 37) {
          nextNavElement = navTabs[index - 1];
       }

       if (e.keyCode == 35) {
          nextNavElement = navTabs[navTabs.length - 1];
       }

       if (e.keyCode == 36) {
        nextNavElement = navTabs[0];
       }
      nextNavElement.childNodes[1].setAttribute('tabindex', 0);
      nextNavElement.childNodes[1].focus();
      e.preventDefault();
      toggleTab(nextNavElement.id, nextNavElement.dataset.target);
    }
  });


  navEl.onclick = function() {
    toggleTab(this.id, this.dataset.target);
  };
});


function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function(navEl) {      
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
      navEl.firstElementChild.setAttribute('aria-selected', true); 
      navEl.firstElementChild.setAttribute('tabindex', 0);
    } else {  
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
      navEl.firstElementChild.setAttribute('aria-selected', false);
      navEl.firstElementChild.setAttribute('tabindex', -1);
    } 
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

function wishGoodDay() {
  var textForUser = document.getElementById('last_news');
  textForUser.innerHTML='We have got interesting news for you';
  setTimeout(wishGoodDay, 60000);
}

wishGoodDay();



//document.querySelector("#form").addEventListener("submit", function(e){
function saveNewUser() {

  var usersPull = [];
  var errorsCount = 0;

  
  //text under input fields
  var userNameHelp = document.getElementById('userNameHelp');
  var birthYearHelp = document.getElementById('birthYearHelp');
  var phoneHelp = document.getElementById('phoneHelp');
  var formErrors = document.getElementById('formErrors');

  //input fields
  var userNameField = document.getElementById('username');
  var birthYearField = document.getElementById('birthYear');
  var emailField = document.getElementById('email');

  //input fields values
  var userName = document.getElementById('username').value;
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var birthYear = document.getElementById('birthYear').value;
  var phone = document.getElementById('phone').value;
  var zipcode = document.getElementById('zipcode').value;
  var email = document.getElementById('email').value;

  //List of errors block
  var formErrors =  document.getElementById('formErrors');
  var userNameMessage = document.getElementById('username');
  var firstNameMessage = document.getElementById('firstName');
  var lastNameMessage = document.getElementById('lastname');
  var birthYearMessage = document.getElementById('birthYear');
  var phoneMessage = document.getElementById('phone');
  var zipcodeMessage = document.getElementById('zipcode');
  var emailMessage = document.getElementById('email');
  
  var user = {
    userName,
    firstName,
    lastName,    
    birthYear,
    phone,
    zipcode,
    email
  } 
        // checking userName
        if (usersPull.length >= 1) {
          usersPull.forEach(function(elem) {
            if (elem.userName == userName){
              userNameHelp.style.display = 'block';
              userNameHelp.classList.add("is-danger");
              userNameHelp.innerHTML='This username already exists';
              userNameField.classList.add("is-danger");
debugger;
              formErrors.style.display = 'block';
              userNameMessage.style.display = 'block';
              errorsCount++;

              delete user.userName;
            }
            else {
              userNameHelp.style.display = 'block';
              userNameHelp.classList.remove("is-danger");
              userNameHelp.classList.add("is-success");
              userNameHelp.innerHTML='This username is available';

              userNameField.classList.remove("is-danger");
              userNameField.classList.add("is-success");
              user.userName = userName;
            }

          })
        }

        // validating first name, last name, address for all users except first one
        if (usersPull.length >= 1) {
          usersPull.forEach(function(addedUser) {
            if (addedUser.firstName == firstName && addedUser.lastName == lastName){
              birthYearField.setAttribute('aria-disabled', false);
              birthYearField.disabled = false;
              birthYearHelp.style.display = 'block';
              userNameHelp.innerHTML='This username already exists';
              birthYearField.focus();//does not work
            }
          })
        };

        // validate number 
        if (phone.length >=1) {
          debugger;
          phoneHelp.style.display = 'block';
          phoneHelp.focus();//does not work

          //to do - add styles red, green
          formErrors.style.display = 'block';
          document.getElementById('phoneMessage').style.display = 'block';         

           //for Block with errors
        }

        // validate email 
        document.getElementById('email').addEventListener('invalid', (event) =>{
          console.log('invalid');
          event.preventDefault();
          alert('first');
        });



  var counter = 0;
     for (var key in user) {
       counter++;
     }

  if (counter==7) {
    usersPull.push(user);
  }       

  console.log('user', user);
  console.log('usersPull', usersPull);

 // document.querySelector("#form").reset();

  var formStart = document.getElementById('username');
    formStart.focus();

  return false;

  // if(!isValid){
  //     alert('not valid form');_
  //     e.preventDefault();    //stop form from submitting
  // 
};

