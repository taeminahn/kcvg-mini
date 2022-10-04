import React from 'react';
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className="inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 bg-slate-900 h-13">
            <div className="flex">
                <Link href="/">
                    <a>
                    <Image
                        src="/main-logo.png"
                        alt="logo"
                        width={179}
                        height={42}
                    >
                    </Image>
                    </a>
                </Link>
                <div className="flex items-center text-3xl text-white ml-28">
                    <Link href="/video">
                        <a>
                            비메오
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex">
                <Link href="/login">
                    <a className="flex items-center justify-center px-4 w-24 h-10 mr-2 text-sm text-center text-black-500 bg-white rounded ">
                        로그인
                    </a>
                </Link>
                <Link href="/register">
                    <a className="flex items-center justify-center px-4 w-24 h-10 text-sm text-center text-white bg-gray-400 rounded ">
                        회원가입
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;