import {
    auth
} from '../../firebase';
import {
    signInWithEmailAndPassword
} from 'firebase/auth';

export const login = async ({
    email,
    password
}) => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password).catch(error => alert(error));
    return userCredentials.user;
}