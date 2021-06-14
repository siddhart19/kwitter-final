//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBnVknylPHkiow1b3_FI0vVba0Qg4637FI",
    authDomain: "catter-7c3f6.firebaseapp.com",
    databaseURL: "https://catter-7c3f6-default-rtdb.firebaseio.com",
    projectId: "catter-7c3f6",
    storageBucket: "catter-7c3f6.appspot.com",
    messagingSenderId: "597425585723",
    appId: "1:597425585723:web:d51415bdc4d4423ddca61e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function send(){
    msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value = "";
}
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.jpeg'></h4>";
message_with_tag = "<h4 class='message_h4'> "+ message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)' >";
span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_width_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();
function updateLike(message_id){
console.log("clicked on the button -"+ message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    
