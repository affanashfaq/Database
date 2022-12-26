// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoKFVBTuVedv1HrgYm_ygg87W3gbg2XX8",
    authDomain: "fire-e95a5.firebaseapp.com",
    projectId: "fire-e95a5",
    storageBucket: "fire-e95a5.appspot.com",
    messagingSenderId: "921082194214",
    appId: "1:921082194214:web:233f241cddc7281bddb9e7",
    measurementId: "G-EXL1HV2DTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();



var task = document.getElementById("task");
var parent = document.getElementById("parent")

window.saveValue = function () {
    var obj = {
        text: task.value
    }
    console.log(obj)
    obj.id = Math.random().toString().slice(2);
    const taskRef = ref(database, `tasks/${obj.id}/`);
    set(taskRef, obj);
};


function getData() {
    var datalist = [];
    const taskRef = ref(database, 'tasks/')
    onChildAdded(taskRef, function (dt) {
        datalist.push(dt.val());
        console.log(datalist);
        parent.innerHTML = "";
        for (var i = 0; i < datalist.length; i++) {
            parent.innerHTML += ` <li> ${datalist[i].text} </li>`;
        }
    });

}
getData();