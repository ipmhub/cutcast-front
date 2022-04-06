import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  sendSignInLinkToEmail,
} from "firebase/auth";
import router from "next/router";
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

type AuthContextProviderType = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  signInWithEmail: (email: string) => Promise<void | string>;
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
        email: requestResult.user?.email || "protected",
        avatarUrl: requestResult.user?.photoURL || "",
        idToken: (await auth.currentUser?.getIdToken()) as string,
        uid: requestResult.user?.uid as string,
        isLoggedIn: true,
      });
    } catch (err) {
      console.error(err);
    }
  }
  async function signInWithEmail(email: string) {
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
      dynamicLinkDomain: "com.autocustcast",
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    });
  }

  async function signOut() {
    auth
      .signOut()
      .then(() => {
        router.push("/login");
        setUser(undefined);
      })
      .catch((error) => {
        throw new Error("Signout error");
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
    <AuthContext.Provider
      value={{ signInWithGoogle, user, signInWithEmail, signOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export const AuthContext = createContext({} as AuthContextType);
