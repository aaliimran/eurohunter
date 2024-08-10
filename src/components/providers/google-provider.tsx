"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type AuthGoogoleProviderProps = {
  children: ReactNode;
};

const AuthGoogleProvider = ({ children }: AuthGoogoleProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthGoogleProvider;
