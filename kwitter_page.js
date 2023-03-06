//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCYLthq3iFxZe-miuJZAK_dwFqOTgOwsEE",
      authDomain: "kwitter-2606f.firebaseapp.com",
      databaseURL: "https://kwitter-2606f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2606f",
      storageBucket: "kwitter-2606f.appspot.com",
      messagingSenderId: "245705700849",
      appId: "1:245705700849:web:e176b4effc857d8b9d0050",
      measurementId: "G-Y7BYJ91S2V"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();

var user_name=localStorage.getItem("user_name")
var room_name=localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
