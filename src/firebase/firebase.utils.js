import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAKYmDA4UpEFD0-si_Uzh4nxdROZZLb0ak',
	authDomain: 'crwn-db-6bc09.firebaseapp.com',
	databaseURL: 'https://crwn-db-6bc09.firebaseio.com',
	projectId: 'crwn-db-6bc09',
	storageBucket: 'crwn-db-6bc09.appspot.com',
	messagingSenderId: '930966442158',
	appId: '1:930966442158:web:a50c908fb4c68a46001d3f',
	measurementId: 'G-CDW2EVJTBF',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
