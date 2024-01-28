function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
  
    var text;
    if(name.length < 5){
      text = "*invalid";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "*invalid";
      error_message.innerHTML = text;
      return false;
    }
    
    if(message.length < 0){
        text = "*invalid";
        error_message.innerHTML = text;
        return false;
    }
    alert("Thank you for you feedback :)");
    return true;
  }