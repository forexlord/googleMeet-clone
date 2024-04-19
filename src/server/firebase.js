import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgTr04k_gjKwAJ5QBHwHM7PLi9F0hPjfI", // Add API Key
  databaseURL:"https://meet-clone-18d6f-default-rtdb.firebaseio.com/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

let firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
