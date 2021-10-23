//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCxq_6_pV3Xn5gtwz0v-bySQAP_-ZM6KRc",
      authDomain: "kwitter-e8537.firebaseapp.com",
      databaseURL: "https://kwitter-e8537-default-rtdb.firebaseio.com",
      projectId: "kwitter-e8537",
      storageBucket: "kwitter-e8537.appspot.com",
      messagingSenderId: "1010266170305",
      appId: "1:1010266170305:web:62fb6482ca9b8bd096c540"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    userName=localStorage.getItem("p name");
    document.getElementById("user_name").innerHTML= "Welcome"+"  "+userName+"   "+"!";


    function add_room() {
      roomName=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomName).update({
            purpose: "Saving only"
      });
      localStorage.setItem("roomName" , roomName);
      window.location="kwitter_page.html";
    };




function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoom(this.id)'>"+Room_names+"</div> <hr>";
                  document.getElementById("output").innerHTML +=row;
                  //End code
            });
      });
}
getData();

function redirectToRoom(name1){
      console.log(name1);
      localStorage.setItem("roomName" , name1);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("p name");
      localStorage.removeItem("roomName");
      window.location="index.html";
}