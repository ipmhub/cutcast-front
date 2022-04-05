import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import { app } from "../services/firebase";

const auth = getAuth(app);

type User = {
  name?: string;
  email: string;
  avatarUrl?: string;
  idToken?: string;
  uid?: string;
  isLoggedIn: boolean;
};

type UserSignUp = {
  email: string;
};

type AuthContextProviderType = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  //   signOut: () => Promise<void>;
  signInWithEmail: (email: UserSignUp) => Promise<void | string>;
  //   deleteUser: () => void;
};

export function AuthContextProvider(props: AuthContextProviderType) {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState<User>();
  const [another, setAnother] = useState<any>();
  //   const sendToEmail = new sendSignInLinkToEmail();

  async function signInWithGoogle() {
    try {
      const requestResult = await signInWithPopup(auth, googleProvider);

      setUser({
        name: (requestResult.user?.displayName as string) || "",
        email: requestResult.user?.email,
        avatarUrl: requestResult.user?.photoURL,
        idToken: (await auth.currentUser?.getIdToken()) as string,
        uid: requestResult.user?.uid as string,
        isLoggedIn: true,
      });
      console.log(user);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }
  async function signInWithEmail({ email }: UserSignUp) {
    var actionCodeSettings = {
      url: "http://localhost:3000/login",
      handleCodeInApp: true,
      iOS: {
        bundleId: "com.example.ios",
      },
      android: {
        packageName: "com.example.android",
        installApp: true,
        minimumVersion: "12",
      },
      dynamicLinkDomain: "http://localhost:3000/login",
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userstate) => {
      if (userstate) {
        setUser({
          name: (userstate.displayName as string) || "",
          email: (userstate.email as string) || "",
          avatarUrl: userstate.photoURL as string,
          idToken: (await auth.currentUser?.getIdToken()) as string,
          uid: userstate.uid,
          isLoggedIn: true,
        });
      } else {
        console.log("user desconectado");
        setUser({
          email: "",
          isLoggedIn: false,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user, signInWithEmail }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export const AuthContext = createContext({} as AuthContextType);
