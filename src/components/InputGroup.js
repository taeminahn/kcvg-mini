import React, {useState} from 'react';
import cls from 'classnames';

const InputGroup = ({
    className = "mb-5",
    type = "text",
    placeholder = "",
    label = "",
    value,
    pwValue,
    setValue,
    checkValidation
}) => {
    const [error, setError] = useState("");
    const validator = {
        id: (value) => {
            const regExp = /^[a-z]+[a-z0-9]{5,19}$/;
            if(regExp.test(value) || !value){
                setError("");
            }else{
                setError("5~20자의 영문 소문자, 숫자만 사용 가능합니다.");
            }
        },
        pw: (value) => {
            const regExp = /^(?=.*[a-zA-Z])(?=.*[~`!@#$%^&*+=\-_\+\\.,/?:;'"])(?=.*[0-9]).{8,16}$/;
            if(regExp.test(value) || !value){
                setError("");
            }else{
                setError("8~16자의 영문 대소문자, 숫자, 특수문자 중 3가지 조합으로 입력해주세요.");
            }
        },
        pwCheck: (value) => {
            if(pwValue == value){
                setError("");
            }else{
                setError("비밀번호를 확인해주세요.");
            }
        },
    }
    const checkValidate = (e) => {
        setValue(e.target.value);
        validator[checkValidation](e.target.value);
        // console.log(validator.checkValidation.validation);
    }
    return (
        <div className={className}>
            <span className='font-medium'>{label}</span>
            <input
                type={type}
                style={{ minWidth: 300 }}
                className={cls(`w-full p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white focus:outline-0 hover:bg-white`,
                    { "border-red-500": error }
                )}
                placeholder={placeholder}
                value={value}
                // onChange={(e) => setValue(e.target.value)}
                onChange={checkValidate}
            />
            <small className='font-medium text-red-500'>{error}</small>
        </div>
    );
};

export default InputGroup;