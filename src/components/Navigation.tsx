"use client";
import { Button } from "@/shadcn-components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  return (
    <nav className="flex justify-between min-w-[900px] items-center h-[30px] cursor-pointer">
      <div
        id="title"
        onClick={() => {
          router.push("/");
        }}
      >
        타이틀 영역
      </div>
      <div id="auth" className="flex justify-center items-center">
        {isLoggedIn ? (
          <div className="flex gap-4 items-center">
            <div>오투라인님</div>
            <Button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              로그아웃
            </Button>
          </div>
        ) : (
          <div className="flex gap-4 ">
            <Button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              로그인
            </Button>
            <Button>회원가입</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
