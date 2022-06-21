function facebook() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "") {
      alert("fill your username...");
      return false;
    } else if (x.length < 10 || x.length > 30) {
      alert("the character should be 10 to 20 word..");
      return false;
    } else if (y == "") {
      alert("fill your password...");
      return false;
    } else if (y.length < 10 || y.length > 30) {
      alert("more than 10 ch..");
      return false;
    }
  
}
function display(){
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if(x=="" && y==""){
        facebook();
        return false;
    }
    else{
        alert("login successfully..");
    }
}