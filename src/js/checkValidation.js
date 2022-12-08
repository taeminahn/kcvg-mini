const checkValidation = (value, name, comparableValue) => {
    const validator = {
        id: (name, data) => {
            const value = data;
            const regExp = /^[a-z]{1}[a-z0-9]{4,19}$/;
            if (regExp.test(value) || !value) {
                return ""
            } else {
                return "5~20자의 영문 소문자, 숫자만 사용 가능합니다."
            }
        },
        pw: (name, data) => {
            const value = data;
            const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_=+])[A-Za-z\d@$!%*?&_=+]{8,16}$/g;
            if (regExp.test(value) || !value) {
                return ""
            } else {
                return "8~16자의 영문 대소문자, 숫자, 특수문자 중 3가지 조합으로 입력해주세요."
            }
        },
        pwCheck: (name, data, comparableData) => {
            const value = data;
            const comparableValue = comparableData;
            const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_=+])[A-Za-z\d@$!%*?&_=+]{8,16}$/g;
            if ((regExp.test(comparableValue) && (value == comparableValue)) || !value) {
                return ""
            } else {
                return "비밀번호를 확인해주세요."
            }
        },
        title: (name, data) => {
            const value = data[name];
            if(value !== ""){
                return ""
            }else {
                return "필수입력 항목입니다."
            }
        },
        content: (name, data) => {
            const value = data[name];
            if(value !== ""){
                return ""
            }else {
                return "필수입력 항목입니다."
            }
        },
        code: (name, data) => {
            const value = data[name];
            if(value !== ""){
                return ""
            }else {
                return "필수입력 항목입니다."
            }
        }
    }
    if(name != 'pwCheck'){
        return validator[name](name, value);
    }else{
        return validator[name](name, value,comparableValue);
    }
}

export default checkValidation;