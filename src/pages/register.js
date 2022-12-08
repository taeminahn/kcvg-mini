import React, {useState, useCallback} from 'react';
import InputGroup from "../components/input/InputGroup";
import Link from "next/link";
import checkValidation from "../js/checkValidation";
import {useRouter} from "next/router";
import useInput from "../hooks/useInput";
import {useDispatch} from "react-redux";
import {SIGN_UP_REQUEST} from "../reducers/auth";

const Register = () => {

    let router = useRouter();
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [pw, onChangePw] = useInput('');
    const [pwCheck, onChangePwCheck] = useInput('');
    const [errors, setErrors] = useState({
        id: '',
        pw: '',
        pwCheck: '',
    });

    const join = useCallback((e) => {
        e.preventDefault();
        if(inputValid()){
            console.log("join");
            dispatch({
                type: SIGN_UP_REQUEST,
                data: {
                    id,
                    pw,
                }
            })
            // const result = await Axios.post('/accounts', {
            //     username: id,
            //     password: pw
            // }).then((res) => {
            //     alert('회원가입이 정상적으로 처리되었습니다.');
            //     return true;
            // }).catch((err) => {
            //     if(err.response.data.message){
            //         alert(err.response.data.message);
            //     }else{
            //         alert('회원가입을 실패했습니다.');
            //     }
            //     return false;
            // });
            // if(result){
            //     router.push('/login');
            // }
        }
        return;
    }, [id, pw]);

    const checkValue = useCallback((e) => {
        const {name, value} = e.target;
        let errorMsg;
        if(name === 'pwCheck'){
            errorMsg = checkValidation(value, name, pw);
        }else{
            errorMsg = checkValidation(value, name);
        }
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
                    <h1 className='mb-2 text-lg font-medium text-center'>회원가입</h1>
                    <form onSubmit={join}>
                        <InputGroup
                            placeholder='영문 소문자/숫자 사용 (5~20자)'
                            value={id}
                            setValue={onChangeId}
                            checkValid={checkValue}
                            error={errors?.id}
                            name="id"
                            label='아이디'
                            length="20"
                        />
                        <InputGroup
                            placeholder='영문 대소문자/숫자/특수문자 조합 (8~16자)'
                            value={pw}
                            setValue={onChangePw}
                            checkValid={checkValue}
                            error={errors?.pw}
                            label='비밀번호'
                            name="pw"
                            type="password"
                            length="16"
                        />
                        <InputGroup
                            placeholder='영문 대소문자/숫자/특수문자 조합 (8~16자)'
                            value={pwCheck}
                            setValue={onChangePwCheck}
                            checkValid={checkValue}
                            error={errors?.pwCheck}
                            label='비밀번호 확인'
                            name="pwCheck"
                            type="password"
                            length="16"
                        />
                        <button
                          type={"submit"}
                          className='w-full py-3 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded hover:bg-slate-900'>
                            회원 가입
                        </button>
                    </form>
                    <small>
                        이미 가입하셨나요?
                        <Link href="/login">
                            <a className='ml-1 text-blue-500 uppercase'>로그인</a>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Register;