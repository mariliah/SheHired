import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

// allow uers to upload file to firebase storage
export const uploadFileToStorage = (file) => {
    const env = process.env.STORAGE_BUCKET;
    const now = new Date();
    const filePath = `gs://${env}/resume/${now.getTime()}-${file.name}`;
    const storageRef = ref(storage, filePath);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on("state_changed", {
            next: (snapshot) => {
                // Handle progress updates here (loading bar, etc.)
            },
            error: (error) => {
                reject(error);
            },
            complete: async () => {
                const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(downloadUrl);
            },
        });
    });
};