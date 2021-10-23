function addUser(){
   var u_name= document.getElementById("login_input").value;

    localStorage.setItem("p name",u_name);

    window.location="kwitter_room.html";
}