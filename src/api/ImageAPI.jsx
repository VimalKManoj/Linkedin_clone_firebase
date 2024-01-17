import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { editProfile } from "./FirestoreAPIs";

export const uploadImage = (
  file,
  id,
  setModalOpen4,
  setProgress,
  setCurrentImage
) => {
  const profilePicsRef = ref(storage, `ProfileImages/${file.name}`);
  const uploadTask = uploadBytesResumable(profilePicsRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((res) => {
        editProfile(id, { profileLink: res });
        setModalOpen4(false);
        setCurrentImage({});
        setProgress(0);
      });
    }
  );
};
