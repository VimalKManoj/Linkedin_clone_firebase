import { firestore } from "../firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  where,
  query,
  setDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRefs = collection(firestore, "users");
let likeRefs = collection(firestore, "likes");
let commentRefs = collection(firestore, "comments");

export const postStatus = (object) => {
  addDoc(postsRef, object)
    .then(() => {
      toast.success("Post has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(postsRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const userData = (object) => {
  addDoc(userRefs, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRefs, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
    );
  });
};

export const editProfile = async (id, payload) => {
  let userToEdit = doc(userRefs, id);

  await updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleStatus = (setAllStatus, id) => {
  const singlePostQuery = query(postsRef, where("id", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRefs, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0]
    );
  });
};

export const likePost = (userid, postid, liked) => {
  try {
    let docToLike = doc(likeRefs, `${userid}_${postid}`);
    if (liked) {
      deleteDoc(docToLike);
    } else {
      setDoc(docToLike, { userid, postid });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getLikesByUser = (userid, postid, setLiked, setLikesCount) => {
  try {
    let likeQuery = query(likeRefs, where("postid", "==", postid));

    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes?.length;

      const isLiked = likes.some((like) => like.userid === userid);

      setLikesCount(likesCount);
      setLiked(isLiked);
    });
  } catch (err) {
    console.log(err);
  }
};

export const postComment = (postid, comment, timeStamp, name, userid) => {
  try {
    addDoc(commentRefs, {
      postid,
      comment,
      timeStamp,
      name,
      userid,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComments = (postid, setComments) => {
  try {
    let singlePostQuery = query(commentRefs, where("postid", "==", postid));

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setComments(comments);
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsers = (setAllUsers) => {
  onSnapshot(userRefs, (response) => {
    setAllUsers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const updatePost = (id, status, postImage) => {
  let postToUpdate = doc(postsRef, id);
  try {
    updateDoc(postToUpdate, { status, postImage });
    toast.success("post has been updated successfully");
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => {
  let postTodelete = doc(postsRef, id);

  try {
    deleteDoc(postTodelete);
    toast.success("Post has been deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
