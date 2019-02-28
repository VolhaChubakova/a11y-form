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


// Form

var usersPull = [];
var errorsCount = 0;

function makeFormActive(message) {
  var formErrors =  document.getElementById('formErrors');
  document.getElementById(message).style.display = 'block';
  formErrors.focus();  
}

// Fields validation

function valitateUserName(value) {

  function makeFormActive(message) {
    var formErrors =  document.getElementById('formErrors');
    formErrors.style.display = 'block';
    document.getElementById(message).style.display = 'block';
    formErrors.focus();  
  }

  var userNameHelp = document.getElementById('userNameHelp') ;
  if (!value) {
    userNameHelp.style.display = 'block';
  }
  else userNameHelp.style.display = 'none';

    if (usersPull.length >= 1) {
      debugger;
      usersPull.forEach(function(elem) {
        if (elem.userName == value){
          userNameHelp.style.display = 'block';
          userNameHelp.innerHTML = 'This username already exists';
          makeFormActive("usernameMessage");
          event.preventDefault();
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
}

function valitateFirstName(value) {
  var firstNameHelp = document.getElementById('firstNameHelp') ;
  if (!value) {
    firstNameHelp.style.display = 'block';
  }
  else firstNameHelp.style.display = 'none';
  event.preventDefault();
  return false;

}

function valitateLastName(value) {
  var lastNameHelp = document.getElementById('lastNameHelp') ;
  if (!value) {
    lastNameHelp.style.display = 'block';
  }
  else lastNameHelp.style.display = 'none';
  event.preventDefault();
  return false;
}

function valitatePhone(value) {
  var phoneHelp = document.getElementById('phoneHelp') ;
  if (!value) {
    phoneHelp.style.display = 'block';
  }
  else phoneHelp.style.display = 'none';

  if (value.length >=10) {
    phoneHelp.style.display = 'block';
    makeFormActive("phoneMessage");        
  }
  event.preventDefault();
  return false;
}


function validateAddress(value) {
  var addressHelp = document.getElementById('addressHelp') ;
  if (!value) {
    addressHelp.style.display = 'block';
  }
  else addressHelp.style.display = 'none';
}

function validateFirstAndLastName(firstName, lastName){
  debugger;
  if (usersPull.length >= 1) {
    usersPull.forEach(function(addedUser) {
      if (addedUser.firstName == firstName && addedUser.lastName == lastName){
        var birthYearField = document.getElementById('birthYear');
        birthYearField.setAttribute('aria-disabled', false);
        birthYearField.disabled = false;
        birthYearHelp.style.display = 'block';
        makeFormActive("birthYearMessage"); 
      }
    })
  };
  event.preventDefault();
  return false;
}

function valitateBirthYear(value){
  var birthYearHelp = document.getElementById('birthYearHelp') ;
  if (!value) {
    birthYearHelp.style.display = 'block';
  }
  else birthYearHelp.style.display = 'none';
}

function validateEmail(value) {
  var emailHelp = document.getElementById('emailHelp') ;

  if (!value) {
    emailHelp.style.display = 'block';
  }
  else {
    var pattern = '^([a-zA-Z0-9\\-_+]+(\\.[a-zA-Z0-9\\-_+]+)*)@(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,})$';
     if (!value.match(pattern)){
      emailHelp.style.display = 'block';
      emailHelp.innerHTML = 'Please use correct email';
      makeFormActive("emailMessage"); 
     }
  }
  event.preventDefault();
  return false;
}


function validateZipcode(value) {
  var zipcodeHelp = document.getElementById('zipcodeHelp') ;
  if (!value) {
    birthYearHelp.style.display = 'block';
  }
  else birthYearHelp.style.display = 'none';
}


function saveNewUser() {

  var formErrors = document.getElementById('formErrors');

  //input fields
  var userNameField = document.getElementById('username');
  var emailField = document.getElementById('email');

  //input fields values
  var userName = document.getElementById('username').value;
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var birthYear = document.getElementById('birthYear').value;
  var phone = document.getElementById('phone').value;
  var zipcode = document.getElementById('zipcode').value;
  var address = document.getElementById('address').value;
  var email = document.getElementById('email').value;


  //List of errors block
  var formErrors =  document.getElementById('formErrors');
  //var userNameMessage = document.getElementById('userNameMessage');
  var firstNameMessage = document.getElementById('firstNameMessage');
  var lastNameMessage = document.getElementById('lastNameMessage');
  var birthYearMessage = document.getElementById('birthYearMessage');
  var phoneMessage = document.getElementById('phoneMessage');
  var zipcodeMessage = document.getElementById('zipcodeMessage');
  var emailMessage = document.getElementById('emailMessage');
  
  var user = {
    userName,
    firstName,
    lastName,    
    birthYear,
    phone,
    zipcode,
    email
  } 

  valitateUserName(userName);
  valitateFirstName(firstName);
  valitateLastName(lastName);
  validateFirstAndLastName(firstName,lastName);
  validateAddress(address);
  validateZipcode(zipcode);
  valitatePhone(phone);
  validateEmail(email);

  usersPull.push(user);

  event.preventDefault();
  return false;
};

function isValid() {


}