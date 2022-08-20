import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import {
    auth
} from "../../firebase";

export const register = async ({
    name,
    email,
    picture,
    password
}) => {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    return userCredentials;
}