function adduser(){
 var username = document.getElementById("logininput").value;
 localStorage.setItem("user_name", username);
window.location = "kwitter_room.html";
}