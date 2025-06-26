"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    console.log(session, status);
    if (session?.user) {
      setLogin(true);
    }
  }, [session, status]);

  return (
    <div>
      구글로그인
      {!isLogin ? (
        <button
          onClick={() => {
            signIn();
          }}
        >
          로그인
        </button>
      ) : (
        <button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      )}
    </div>
  );
}
