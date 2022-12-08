import React, {useCallback, useState} from 'react';
import {useRouter} from "next/router";
import InputGroup from "../components/input/InputGroup";
import Link from "next/link";
import Axios from "./api/customAxios";
import checkValidation from "../js/checkValidation";
import {useDispatch} from "react-redux";
import { setCookieAccessToken } from '../storage/Cookie';
import useInput from "../hooks/useInput";
import {loginAction} from "../reducers/auth";

const Login = () => {

    // 관리자 계정 정보 id : admin / pw : wG3U_=lrf7a+@pC
    let router = useRouter();
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [pw, onChangePw] = useInput('');
    const [errors, setErrors] = useState({
        id: '',
        pw: '',
    });
    const [tab, setTab] = useState(0); // 0 : 사용자 , 1 : 관리자


    const changeTab = useCallback((e) => {
        setTab(Number(e.target.value));
    }, [tab]);

    const authenticate = async (e) => {
        e.preventDefault();
        if(inputValid()){
            const result = await Axios.post('/auth', {
                username: id,
                password: pw
            }).then((res) => {
                let token = res.headers.authorization;
                let refreshToken = res.headers.authorizationrefresh;
                if(token && refreshToken){
                    localStorage.setItem("refreshToken", refreshToken);
                    setCookieAccessToken(token);
                    dispatch(loginAction(token));
                    return true;
                }
                return false;
            }).catch((err) => {
                console.log(err);
                if(err.response && err.response.data.message){
                    alert(err.response.data.message);
                }else{
                    alert('로그인에 실패했습니다.');
                }
                return false;
            });
            if(result){
              router.push('/');
            }
        }
        return;
    }

    const checkValue = useCallback((e) => {
        const {name, value} = e.target;
        const errorMsg = checkValidation(value, name);
        setErrors({...errors, [name]: errorMsg});
    }, [errors]);

    const inputValid = useCallback(() => {
        if(errors && Object.keys(errors).length > 0){
            return Object.values(errors).every((e) => {
                return e === '';
            })
        }
        return false;
    }, [errors]);

    return (
        <div className='h-full'>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-10/12 mx-auto md:w-96'>
                    <h1 className='mb-2 text-lg font-medium text-center'>로그인</h1>
                    <div className="flex justify-between mb-2">
                        <button
                            className={`w-3/6 py-3 mr-3 text-xs font-bold text-white uppercase border border-gray-400 rounded hover:bg-slate-900 ` + (tab == 0 ? 'bg-slate-900' : 'bg-gray-400')}
                            onClick={changeTab}
                            value={0}
                        >
                            사용자
                        </button>
                        <button
                            className={`w-3/6 py-3 text-xs font-bold text-white uppercase border border-gray-400 rounded hover:bg-slate-900 ` + (tab == 1 ? 'bg-slate-900' : 'bg-gray-400')}
                            onClick={changeTab}
                            value={1}
                        >
                            관리자
                        </button>
                    </div>
                    <form onSubmit={authenticate}>
                        <InputGroup
                            placeholder='영문 소문자/숫자 사용 (5~20자)'
                            value={id}
                            setValue={onChangeId}
                            checkValid={checkValue}
                            error={errors?.id}
                            name="id"
                            label='아이디'
                        />
                        <InputGroup
                            placeholder='영문 대소문자/숫자/특수문자 조합 (8~16자)'
                            value={pw}
                            setValue={onChangePw}
                            checkValid={checkValue}
                            error={errors?.pw}
                            name="pw"
                            label='비밀번호'
                            type="password"
                        />
                        <button
                            onClick={authenticate}
                            type="submit"
                            className='w-full py-3 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded hover:bg-slate-900'>
                            로그인
                        </button>
                        {tab == 0 ?
                            <Link href="/register">
                                <button
                                    className='w-full py-3 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded hover:bg-slate-900'>
                                    회원가입
                                </button>
                            </Link>
                            :
                            ""
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
