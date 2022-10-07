import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore ,doc, setDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyAZT8WeEJcHEuj9Yn7iu5Qzf5NVFs9XU9Y",
    authDomain: "test-da73d.firebaseapp.com",
    projectId: "test-da73d",
    storageBucket: "test-da73d.appspot.com",
    messagingSenderId: "807758052932",
    appId: "1:807758052932:web:b96b300bda9761e2c0c611",
    measurementId: "G-JLKWY5NQD2"
  };
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);



  // --------sign Up-----------

  let firstLastName = document.getElementById("firstLastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let mobile = document.getElementById("mobile");
  let signBtn = document.getElementById("sign_btn");
  
  if(signBtn){
    
    signBtn.addEventListener("click" ,() => {
    event.preventDefault()
      alert("hello")
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        // console.log("hello")
        const user = userCredential.user;
        console.log(email.value)
        console.log(password.value)
        window.location.replace("login.html")

    
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
    
    
    });
}


