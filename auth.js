// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDvE3Xoz3D2j-EhfjQy2OaImMp44XodSPE",
	authDomain: "pgn-alums.firebaseapp.com",
	databaseURL: "https://pgn-alums.firebaseio.com",
	projectId: "pgn-alums",
	storageBucket: "pgn-alums.appspot.com",
	messagingSenderId: "836338480667",
	appId: "1:836338480667:web:8bc7d211b3082089"
};

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'main.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
