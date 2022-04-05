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

    if (user) {
      return (
        <>
          <Component {...props} />
          {console.log(user)}
        </>
      );
    } else {
      return <Loading />;
    }

    // return <LoadingScreen />;
  };
}
