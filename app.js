var firebaseConfig = {
  apiKey: "AIzaSyAkGzCat4XgoCEkbF41UYxNqAFdjG3Jyfk",
  authDomain: "metro-grammar-school.firebaseapp.com",
  projectId: "metro-grammar-school",
  storageBucket: "metro-grammar-school.firebasestorage.app",
  messagingSenderId: "150465529103",
  appId: "1:150465529103:web:8b63f2938cf3066d93ea7a",
  measurementId: "G-4G62G55QQW"
};


var app = firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();


function signup() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  auth
    .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (response) {
      console.log(response);

      response.user
        .sendEmailVerification()
        .then(function () {
          console.log("email verification sent");
        })
        .catch(function (error) {
          console.log(error);
        });

      Swal.fire({
        title: "SignUp Successfully!",
        icon: "success",
      });

      
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    });
}

// Login user
function login() {
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  auth
    .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (response) {
      console.log(response);
      Swal.fire({
        title: "Login Successfully!",
        icon: "success",
      });

      
    })
    .catch(function (error) {
      Swal.fire({
        title: "Warning!",
        text: error.message,
        icon: "error",
      });
    });
}

function LoginwithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (response) {
      console.log(response);
      Swal.fire({
        title: "Login Successfully with Google!",
        icon: "success",
      });

      
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    });
}