import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Axios from "../pages/api/customAxios";
import {removeCookieAccessToken} from "../storage/Cookie";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {logoutAction} from "../reducers/auth";

const NavBar = () => {

    let router = useRouter();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.authenticated);

    const logout = () => {
        // const result = Axios.delete('/auth')
        //     .then((res) => {
        //         console.log(res);
        //         return true;
        //     }).catch((err) => {
        //         console.log(err);
        //         return false;
        //     })
        // if(result){
        //     console.log(result);
        // }
        dispatch(logoutAction());
        removeCookieAccessToken();
        localStorage.removeItem('refreshToken');
        router.push('/login');
    }

    return (
        <div className="inset-x-0 top-0 z-10  px-5 py-5 bg-slate-900 h-13">
            <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
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
                    <div className="flex items-center text-1xl text-white ml-28">
                        <Link href="/video/list">
                            <a>
                               동영상 가이드
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    {isLoggedIn ?
                      <button
                        onClick={logout}
                        className="flex items-center justify-center px-4 w-24 h-10 mr-2 text-sm text-center text-black-500 bg-white rounded ">
                          로그아웃
                      </button>
                      :
                      <>
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
                      </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;