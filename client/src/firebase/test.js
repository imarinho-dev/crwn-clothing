import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
	.collection('users')
	.doc('ovelaxYakPbSZHLP2eD3')
	.collection('cartItems')
	.doc('A2AY5Q3KGSGeOKJykFXv');
