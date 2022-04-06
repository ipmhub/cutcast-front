import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "./useAuth";
import { isMobile, isBrowser } from "react-device-detect";
import Login from "../pages/login";
import Loading from "../Loading";

export function withProtected(Component: any) {
  return function WithProtected(props: any) {
    const { user } = useAuth();
    const router = useRouter();

    if (user && user?.isLoggedIn === true) {
      return (
        <>
          <Component {...props} />
          {console.log(user)}
        </>
      );
    } else if (user?.isLoggedIn === false) {
      router.push("/login");
    } else {
      return <Loading />;
    }

    // return <LoadingScreen />;
  };
}

export function withPublic(Component: any) {
  return function WithPublic(props: any) {
    const { user } = useAuth();
    const router = useRouter();
    if (user && user.isLoggedIn === true) {
      router.push(`/`);
      return <Loading />;
    }
    return <Component {...props} />;
    // return <LoadingScreen />;
  };
}
