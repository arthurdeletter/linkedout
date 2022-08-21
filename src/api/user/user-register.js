import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import {
    auth
} from "../../firebase";

export const register = async ({
    username,
    email,
    picture,
    password
}) => {
    let user = null;
    await createUserWithEmailAndPassword(auth, email, password).then((uc) => updateProfile(uc.user, {
        displayName: username,
        photoURL: picture
    }).then(user = uc.user)).catch(error => alert(error));
    return user;
}