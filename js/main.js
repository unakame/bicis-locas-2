function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById("name");
  var name1 = name.value.charAt(0);
  var lastname = document.getElementById("lastname");
  var email = document.getElementById("input-email");
  var password = document.getElementById("input-password");
  var select = document.getElementsByClassName('form-control')[4];
  var nameSpan = document.getElementById("warning-name");
  var lastnameSpan = document.getElementById("warning-lastname")
  var emailSpan = document.getElementById("warning-email");
  var passwordSpan = document.getElementById("warning-password");
  var selectSpan = document.getElementById("warning-select")
  var rgEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



  if ( name.value === '' ){
      nameSpan.style.display = "block";
   }else{
      nameSpan.style.display = "none";
  }

  if ( lastname.value === ''){
       lastnameSpan.style.display ="block";
   }else{
       lastnameSpan.style.display = "none";
  }

  if( email.value === '' || rgEmail.test(email.value) === false){
       emailSpan.style.display = "block";
   }else{
       emailSpan.style.display = "none";
  }

  if ( password.value === '' || password.value === '123456' || password.value === '0987654' || password.value === 'password'|| password.value.length < 6 ){
       passwordSpan.style.display = "block";
   }else{
       passwordSpan.style.display = "none";
  }

  if ( select.value == 0){
      selectSpan.style.display = "block";
  }else{
      selectSpan.style.display = "none";
  }

}
