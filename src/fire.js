import { default as fb } from 'firebase';

const config = {
    apiKey: "AIzaSyCB5KuAzteRb_nnkS826_OTszGg6dkGFWY",
    authDomain: "casa-connect-b4cb7.firebaseapp.com",
    databaseURL: "https://casa-connect-b4cb7.firebaseio.com",
    projectId: "casa-connect-b4cb7",
    storageBucket: "casa-connect-b4cb7.appspot.com",
    messagingSenderId: "836005124578"
  };

const firebase = fb.initializeApp(config);

export default firebase;