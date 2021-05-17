var firebaseConfig = {
      apiKey: "AIzaSyCq69SEqXJeWGy9EcufWc4wQHTYuvtM-8E",
      authDomain: "database-for-kwitter.firebaseapp.com",
      databaseURL: "https://database-for-kwitter-default-rtdb.firebaseio.com",
      projectId: "database-for-kwitter",
      storageBucket: "database-for-kwitter.appspot.com",
      messagingSenderId: "1096994390414",
      appId: "1:1096994390414:web:bb26bdbc6ab8cfa42124df",
      measurementId: "G-K8EBRS2GD6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}