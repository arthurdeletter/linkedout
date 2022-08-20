import {
    updateProfile
} from "firebase/auth"

export const update = async (user, name, picture) => {
    await updateProfile(user, {
        displayName: name,
        photoURL: picture,
    }).catch(error => console.error(error));
    return true;
}