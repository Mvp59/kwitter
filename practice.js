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

 function Adduser (){
   var firebasesave = document.getElementById("inputadd").value;
   firebase.database().ref("/").child(firebasesave).update({
       purpose : "addinguser"
   });
 }