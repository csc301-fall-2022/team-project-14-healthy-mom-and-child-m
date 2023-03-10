import { firebase } from '../firebase'

export function signup(email, password, Firstname, Lastname, age) {
    // Create an authorized user and create the user's profile in the database
    const auth = firebase.auth()
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
    firebase.firestore()
    .collection('users')
    .doc(auth.currentUser?.email)
    .set({
      FirstName: Firstname,
      LastName: Lastname,
      Age: age,
      isPregnant: false
      })
    .then(() => {
      console.log('User added!');
    });
    })
    .catch(error => alert(error.message))
}

export function login(email, password) {
    // Log a user in by email and password
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }