import express from "express";
import bodyParser from "body-parser";
import uniqid from "uniqid";

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// ================== firebase ================== //
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, onValue, set, update } from "firebase/database";

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

app.get("/userSignUp", function (req, res) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, req.query.email, req.query.password)
    .then((userCredential) => {
      // Signed Up
      console.log(
        `The user ${userCredential.user.reloadUserInfo.email} sign Up successfully`
      );
      console.log(userCredential.user.uid);
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

app.get("/userSignIn", function (req, res) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, req.query.email, req.query.password)
    .then((userCredential) => {
      // Signed in
      console.log(
        `${userCredential.user.reloadUserInfo.email} signed in successfully`
      );
      res.send(JSON.stringify({ isUser: true, id: auth.currentUser }));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode:  ${errorCode}`);
      console.log(`errorMessage:  ${errorMessage}`);
      console.log(error);
      res.send(JSON.stringify({ isUser: false }));
    });
});

app.get("/userSignIn/form", function (req, res) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let userData = {
        email: user.email,
        firstName: "",
        lastName: "",
        address: {
          city: "",
          street: "",
          streetNum: "",
        },
        phone: "",
        profileImage: "",
        activities: [],
      };
      const refrence = ref(db, "users/" + user.uid);
      set(refrence, userData);
      res.send(
        JSON.stringify({ user: user.reloadUserInfo.email, data: userData })
      );
    } else {
      console.log(`The user signed out`);
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
      let date = new Date(
        req.query.year,
        req.query.month - 1,
        req.query.day,
        req.query.hour,
        req.query.minute
      ).toString();
      let activity = {
        createdBy: user.uid,
        createdTime: new Date().toString(),
        StartTime: date,
        location: {
          longitude: req.query.longitude,
          latitude: req.query.latitude,
        },
        type: req.query.type,
        participants: [user.uid],
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

// app.get("/infostudyzone", function (req, res) {
//   const refrence = ref(db, "studyZones/" + req.query.name);
//   onValue(refrence, (snapshot) => {
//     let data = snapshot.val();
//     console.log(data);
//     let answer = {
//       name: req.query.name,
//       crowded: data.crowded.rating,
//       food: data.food.rating,
//       price: data.price.rating,
//       totalRating: data.totalRating,
//       location: { latitude: data.location.latitude, longitude: data.location.longitude },
//       //latitude: data.location.latitude,
//       //longitude: data.location.longitude,
//     };
//     res.send(JSON.stringify(answer));
//   });
// });

// app.get("/updatestudyzones", function (req, res) {
//   const refrence = ref(db, "studyZones/" + req.query.name);
//   onValue(refrence, (snapshot) => {
//     let data = snapshot.val();

//     function updateRatings(key) {
//       data[key].raters.push(parseInt(req.query[key]));
//       let sum = data[key].raters.reduce((a, b) => a + b, 0);
//       let len = data[key].raters.length;
//       data[key].rating = parseFloat((sum / len).toFixed(2));
//     }
//     updateRatings("crowded");
//     updateRatings("food");
//     updateRatings("price");

//     data.totalRating = parseFloat(
//       (
//         (1 / 3) * data.crowded.rating +
//         (1 / 3) * data.food.rating +
//         (1 / 3) * data.price.rating
//       ).toFixed(2)
//     );
//     set(refrence, data);
//     res.send(JSON.stringify(data));
//   });
// });

// ================== FireBase To Map ================== //

console.log(new Date());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
