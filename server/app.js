import express from "express";
import bodyParser from "body-parser";
import uniqid from "uniqid";

// ================== firebase ================== //
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, onValue, set, update } from "firebase/database";

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS5OYAI-MwX6zAbQ__QL81zkHJopf4JdE",
  authDomain: "milabapp-d305c.firebaseapp.com",
  databaseURL: "https://milabapp-d305c-default-rtdb.firebaseio.com",
  projectId: "milabapp-d305c",
  storageBucket: "milabapp-d305c.appspot.com",
  messagingSenderId: "242172785152",
  appId: "1:242172785152:web:584a8636a04947f7525ee5",
  measurementId: "G-GTTNQGMEVH",
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getDatabase();

// ================== firebase ================== //

// ================== Authentication ================== //

/// delete  - relevant only in production ////
const auth = getAuth(appFirebase);
signInWithEmailAndPassword(auth, "amzalegbarak@gmail.com", "barak2661995")
  .then((userCredential) => {
    // Signed Up
    console.log(
      `The user ${userCredential.user.reloadUserInfo.email} sign Up successfully`
    );
    console.log(userCredential.user.uid);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`errorCode:  ${errorCode}`);
    console.log(`errorMessage:  ${errorMessage}`);
  });

/// delete  - relevant only in production ////

app.get("/userSignUp", function (req, res) {
  const auth = getAuth(appFirebase);
  createUserWithEmailAndPassword(auth, req.query.email, req.query.password)
    .then((userCredential) => {
      // Signed Up
      console.log(
        `The user ${userCredential.user.reloadUserInfo.email} sign Up successfully`
      );
      console.log(userCredential.user.uid);
      // res.redirect("./userSignUpSecond")
      res.send(JSON.stringify({ isCreatedUser: true }));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode:  ${errorCode}`);
      console.log(`errorMessage:  ${errorMessage}`);
      res.send(JSON.stringify({ isCreatedUser: false }));
    });
});

//-------------currently there is no use in this code:-----------------
// app.get("/userSignIn", function (req, res) {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, req.query.email, req.query.password)
//     .then((userCredential) => {
//       // Signed in
//       console.log(
//         `${userCredential.user.reloadUserInfo.email} signed in successfully`
//       );
//       res.send(JSON.stringify({ isUser: true, id: auth.currentUser }));
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(`errorCode:  ${errorCode}`);
//       console.log(`errorMessage:  ${errorMessage}`);
//       console.log(error);
//       res.send(JSON.stringify({ isUser: false }));
//     });
// });

app.get("/SignUpSecond", function (req, res) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let userData = {
        email: user.email,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        age: req.query.age,
        address: {
          city: req.query.city,
          street: req.query.street,
          streetNum: req.query.street_num,
        },
        profileImage: "",
        hobbies: [],
        activities: [],
      };
      const refrence = ref(db, "users/" + user.uid);
      set(refrence, userData);
      console.log("user second part saved in DB");
      res.send(
        JSON.stringify({ user: user.reloadUserInfo.email, data: userData })
      );
    } else {
      console.log(`The user isn't sign in at the moment`);
      res.send(JSON.stringify({ isUser: false }));
    }
  });
});

app.get("/SignUpThird", function (req, res) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const refrence = ref(db, "users/" + user.uid + "/hobbies");
      set(refrence, req.query.hobbies);
      console.log("user third part saved in DB");
      res.send(
        JSON.stringify({
          user: user.reloadUserInfo.email,
          hobbies: req.query.hobbies,
        })
      );
    } else {
      console.log(`couldn't save hobbies of this user in DB`);
      res.send(JSON.stringify({ isUser: false }));
    }
  });
});
// // ================== Authentication ================== //

// // ================== FireBase To Map ================== //
app.get("/getactivities", function (req, res) {
  onValue(ref(db, "activities/"), (snapshot) =>
    res.send(JSON.stringify(snapshot.val()))
  );
});

app.get("/createactivity", function (req, res) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let year = req.query.date.slice(0, 4);
      let month = req.query.date.slice(5, 7);
      let day = req.query.date.slice(8, 10);

      let startTime = new Date(
        year,
        month - 1,
        day,
        req.query.startAt.slice(0, 2),
        req.query.startAt.slice(3, 5)
      ).toString();
      let endTime = new Date(
        year,
        month - 1,
        day,
        req.query.endsAt.slice(0, 2),
        req.query.endsAt.slice(3, 5)
      ).toString();
      let activity = {
        createdBy: user.uid,
        createdTime: new Date().toString(),
        startTime: startTime,
        endTime: endTime,
        location: {
          // longitude: req.query.longitude,
          // latitude: req.query.latitude,
          city: req.query.city,
          street: req.query.street,
          street_num: req.query.street_num,
        },
        type: req.query.type,
        participants: [user.uid],
        participantsMax: req.query.participantsMin,
        participantsMin: req.query.participantsMax,
      };
      console.log(activity);
      const refrence = ref(db, "activities/" + uniqid());
      set(refrence, activity);
      onValue(refrence, (snapshot) => res.send(JSON.stringify(snapshot.val())));
    } else {
      console.log(`The user is signed out`);
      res.send(JSON.stringify({ isUser: false }));
    }
  });
});

app.get("/joinActivity", function (req, res) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const refrence = ref(db, "users/" + user.uid);
      onValue(refrence, (snapshot) => {
        console.log(snapshot.val());
        let activities = snapshot.val().activities;
        if (activities) activities.push(req.query.activity);
        else activities = [req.query.activity];
        set(ref(db, "users/" + user.uid + "/activities"), activities);
        // console.log("add activity to user");
      });
    } else {
      console.log(`The user is signed out`);
      res.send(JSON.stringify({ isUser: false }));
    }
  });
});

// ================== FireBase To Map ================== //

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
