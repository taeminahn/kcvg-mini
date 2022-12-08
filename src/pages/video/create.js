import React, {useState} from 'react';
import Axios from "../api/customAxios";
import InputGroup from "../../components/input/InputGroup";
import TextareaGroup from "../../components/input/TextareaGroup";
import RadioGroup from "../../components/input/RadioGroup";
import {useRouter} from "next/router";
import checkValidation from "../../js/checkValidation";
import KeywordInput from "../../components/input/KeywordInput";

const Create = () => {

  let router = useRouter();
  const [createData, setCreateData] = useState({
    title: '',
    content: '',
    keyword: [],
    code: '',
    type: '',
    visible: '',
  })

  const [keywordInput, setKeywordInput] = useState("");

  const [errors, setErrors] = useState({
    title: '',
    content: '',
    code: '',
  });

  const checkValue = (e) => {
    const {name, value} = e.target;
    createData[name] = value;
    const errorMsg = checkValidation(createData, name);
    setCreateData({...createData, [name]: value});
    setErrors({...errors, [name]: errorMsg});
  }

  const setKeyword = (keywordArr) => {
    setCreateData({...createData, keyword: keywordArr})
  }

  const setRadioData = (e) => {
    let {name, value} = e.target;

    /* true/false가 string으로 들어올 경우 boolean 타입의 데이터 변환 */
    if(value === "true" || value === "false"){
      value = value === "true";
    }

    setCreateData({...createData, [name]: value});
  }

  const createVimeo = () => {
    const result = Axios.post('/video', createData
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });

    console.log(result);
  }

  return (
    <div className="pt-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="pb-5 border-b border-gray-400 text-2xl font-bold">동영상 등록</div>
        <div className="block px-10 pt-10">
          <form onSubmit={(e) => {e.preventDefault()}}>
            <RadioGroup
              className="flex items-center w-full mb-10"
              label="공개 여부"
              radioLabel={["공개", "비공개"]}
              name="visible"
              value={[true, false]}
              setValue={setRadioData}
            />
            <InputGroup
              className="flex items-baseline w-full mb-10"
              placeholder='제목을 입력해주세요.'
              value={createData.title}
              setValue={checkValue}
              error={errors.title}
              name="title"
              label='비디오 제목'
              length="20"
            />
            <TextareaGroup
              className="flex items-start w-full mb-10"
              placeholder='내용을 입력해주세요.'
              value={createData.content}
              setValue={checkValue}
              error={errors.content}
              label='비디오 내용'
              name="content"
              type="text"
            />
            <KeywordInput
              className="flex items-baseline w-full mb-10"
              placeholder='키워드와 키워드는 쉼표로 구분하며, 10개까지 입력할 수 있습니다.'
              value={keywordInput}
              setValue={setKeywordInput}
              setData={setKeyword}
              error={null}
              label='키워드'
              name="keyword"
              type="text"
            />
            <InputGroup
              className="flex items-baseline w-full mb-10"
              placeholder='비메오 링크 코드를 입력해주세요.'
              value={createData.code}
              setValue={checkValue}
              error={errors.code}
              label='코드'
              name="code"
              type="number"
              length="16"
            />
            <RadioGroup
              className="flex items-center w-full mb-10"
              label="추천 콘텐츠 적용 여부"
              radioLabel={["추천 콘텐츠", "일반 콘텐츠"]}
              name="type"
              value={["RECOMMEND", "NORMAL"]}
              setValue={setRadioData}
            />
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => router.back()}
                className='mr-5 px-10 py-4 text-lx font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded'>
                취소
              </button>
              <button
                type="button"
                onClick={createVimeo}
                className='px-10 py-4 text-lx font-bold text-white uppercase rounded bg-slate-900'>
                등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;