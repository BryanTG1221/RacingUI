import { initializeApp } from 'firebase/app';
import { getStorage,ref,uploadBytes,getDownloadURL } from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyC0o_N3d7viXPpBt76lhYWFBQVRrkyfJa8",
    authDomain: "apirest-60eba.firebaseapp.com",
    databaseURL: "https://apirest-60eba-default-rtdb.firebaseio.com",
    projectId: "apirest-60eba",
    storageBucket: "apirest-60eba.appspot.com",
    messagingSenderId: "643248325049",
    appId: "1:643248325049:web:d0b8d31f4e7aa0cd1eb668"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadDriver (File) {
    const storageDriversRef = ref(storage, 'Drivers/' + File.name);
    const uploadBytesResponse = await uploadBytes(storageDriversRef, File);
    const downloadURL = await getDownloadURL(uploadBytesResponse.ref);
    return downloadURL;
}

export async function uploadHelmet (File) {
    const storageHelmetsRef = ref(storage, 'Helmets/' + File.name);
    const uploadBytesResponse = await uploadBytes(storageHelmetsRef, File);
    const downloadURL = await getDownloadURL(uploadBytesResponse.ref);
    return downloadURL;
}
