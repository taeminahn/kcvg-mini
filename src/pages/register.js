import React, {useState} from 'react';
import InputGroup from "../components/InputGroup";
import Link from "next/link";

const Register = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    // const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("아이디", id);
        console.log("비밀번호", pw);
        console.log("비밀번호 확인", pwCheck);
    }

    return (
        <div className='bg-white'>
            <div className='flex flex-col items-center justify-center h-screen p-6'>
                <div className='w-10/12 mx-auto md:w-96'>
                    <h1 className='mb-2 text-lg font-medium text-center'>회원가입</h1>
                    <form onSubmit={handleSubmit}>
                        <InputGroup
                            placeholder='영문 소문자/숫자 사용 (5~20자)'
                            value={id}
                            setValue={setId}
                            checkValidation="id"
                            // error={errors.id}
                            label='아이디'
                        />
                        <InputGroup
                            placeholder='영문 대소문자/숫자/특수문자 조합 (8~16자)'
                            value={pw}
                            setValue={setPw}
                            checkValidation="pw"
                            // error={errors.pw}
                            label='비밀번호'
                            type="password"
                        />
                        <InputGroup
                            placeholder='영문 대소문자/숫자/특수문자 조합 (8~16자)'
                            value={pwCheck}
                            pwValue={pw}
                            setValue={setPwCheck}
                            checkValidation="pwCheck"
                            // error={errors.pwCheck}
                            label='비밀번호 확인'
                            type="password"
                        />
                        <button className='w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded'>
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