// LogoutButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const LogoutButton = () => {
  const { data: session, status } = useSession();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      setUserEmail(session.user.email || null);
      setUserName(session.user.name || null);
    }
  }, [session]);

  if (status === "authenticated") {
    return (
      <div>
        <p>Email: {userEmail}</p>
        <p>Name: {userName}</p>
        <button
          className="w-full flex p-4 px-5 justify-center items-center gap-2 rounded-lg border border-gray-300 relative"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/");
  }

  return null;
};

export default LogoutButton;
