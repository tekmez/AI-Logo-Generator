import {
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  CollectionReference,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import Logo from "@/types/logo";

export const useLogoService = () => {
  const logoRef = collection(db, "logos") as CollectionReference<Logo>;

  // Add a logo to the database
  const addLogo = async (
    logoData: Omit<Logo, "id">
  ): Promise<string | undefined> => {
    try {
      const docRef = doc(logoRef);
      await setDoc(docRef, {
        ...logoData,
        id: docRef.id,
      });
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return undefined;
    }
  };

  // Get a logo from the database
  const getLogo = async (id: string): Promise<Logo | null> => {
    try {
      const docRef = doc(logoRef, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id } as Logo;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (e) {
      console.error("Error getting document: ", e);
      return null;
    }
  };

  // Update a logo in the database
  const updateLogo = async (
    id: string,
    logoData: Omit<Logo, "id">
  ): Promise<boolean> => {
    try {
      const docRef = doc(logoRef, id);
      await updateDoc(docRef, logoData);
      console.log("Document successfully updated!");
      return true;
    } catch (e) {
      console.error("Error updating document: ", e);
      return false;
    }
  };

  // Delete a logo from the database
  const deleteLogo = async (id: string): Promise<boolean> => {
    try {
      const docRef = doc(logoRef, id);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      return true;
    } catch (e) {
      console.error("Error deleting document: ", e);
      return false;
    }
  };

  // Clear the database
  const clearDB = async (): Promise<boolean> => {
    try {
      const querySnapshot = await getDocs(logoRef);
      const deletePromises = querySnapshot.docs.map((document) =>
        deleteDoc(document.ref)
      );

      await Promise.all(deletePromises);
      console.log("Database successfully cleared!");
      return true;
    } catch (e) {
      console.error("Error clearing database: ", e);
      return false;
    }
  };

  // Get all logos from the database
  const getAllLogos = async (): Promise<Logo[]> => {
    try {
      const querySnapshot = await getDocs(logoRef);
      const logos: Logo[] = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as Logo;
      });

      return logos;
    } catch (e) {
      console.error("Error getting all logos: ", e);
      return [];
    }
  };

  return {
    addLogo,
    getLogo,
    updateLogo,
    deleteLogo,
    clearDB,
    getAllLogos,
  };
};
