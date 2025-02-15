 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import {getAnalytics} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js"
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDTubnRAT4uoiczWei_GGRpBbon2Pg2VzE",
    authDomain: "authentication-bd915.firebaseapp.com",
    projectId: "authentication-bd915",
    storageBucket: "authentication-bd915.firebasestorage.app",
    messagingSenderId: "240032788349",
    appId: "1:240032788349:web:305714a01e1816ace76614"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics=getAnalytics(app);

  const submit=document.getElementById("submit")

  submit.addEventListener("click",function(event){
    event.preventDefault()
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("sign is successfully....")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  });
 
