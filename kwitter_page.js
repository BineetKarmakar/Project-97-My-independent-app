//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("p name");
room_name=localStorage.getItem("roomName");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        u_name=message_data['Name'];
                        u_message=message_data['Message'];
                        u_message_like=message_data['Like'];
                        name_tag="<h4>"+u_name+"<img class='user_tick' src='tick.png'></h4>";
                        message_tag="<h4 class='message_h4'>"+u_message+"</h4>";
                        button_tag="<button class='btn btn-warning' id="+firebase_message_id+" value"+u_message_like+" onclick='update_like(this.id)'>";
                        span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like : "+u_message_like+"</span></button><hr>";
                        row= name_tag + message_tag + button_tag + span_tag;
                        document.getElementById("output").innerHTML+=row;
                        //End code
                  }
            });
      });
}
getData();



function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            Like:0
      });
      document.getElementById("msg").value=" ";
};

function update_like(m_id){
      Likes=document.getElementById(m_id).value;
      present_like=Number(Likes)+1;
      console.log(present_like);
      firebase.database().ref(room_name).child(m_id).update({
            Like:present_like
      });

};

function logout(){
      localStorage.removeItem("p name");
      localStorage.removeItem("roomName");
      window.location.replace("index.html")//window.location="index.html";
}