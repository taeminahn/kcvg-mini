import React, {useEffect, useState} from 'react';

const KeywordInput = ({
                        className = "mb-5",
                        type = "text",
                        placeholder = "",
                        label = "",
                        value,
                        setValue,
                        setData,
                        name,
                        error,
                        length,
                      }) => {

  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    if (keywords.length !== 0) {
      setData(keywords);
    }
  }, [keywords])

  const keyUpEvent = (e) => {
    let keywordVal = e.target.value.replace(/ /g, '');
    let enter = e.keyCode === 13;
    let spaceBar = e.keyCode === 32;
    let backSpace = e.keyCode === 8;

    // 키워드 추가
    if (enter || spaceBar) {
      if (checkKeyWord(keywordVal)) {
        setKeywords(keyword => [...keyword, keywordVal]);
        setValue("");
      }
      ;
    }
  }

  // 빈값, 중복, 최대 개수 확인
  const checkKeyWord = (keyword) => {
    let maxKeyword = 10;
    let checkNull = !!keyword; // 빈값 확인
    let checkMax = keywords.length + 1 <= maxKeyword; // 최대 개수 확인
    let checkOverlap = !keywords.includes(keyword);

    if (checkNull && checkMax && checkOverlap) {
      return true
    } else if (!checkOverlap) {
      alert('중복된 키워드가 존재합니다.');
    } else if (!checkMax) {
      alert(`키워드는 최대 ${maxKeyword}개까지 입력할 수 있습니다.`);
    }
    return false;
  }

  // 키워드 삭제
  const deleteKeyword = (keyword) => {
    setKeywords(keywords.filter(v => v !== keyword));
  }
  return (
    <div className={className}>
      <div className='font-medium mb-1 min-w-200'>{label}</div>
      <div
        className='w-full min-w-300'
      >
        <input
          type={type}
          className='w-full p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white focus:outline-0 hover:bg-white'
          placeholder={placeholder}
          value={value}
          name={name}
          maxLength={length}
          onInput={(e) => setValue(e.target.value)}
          onKeyUp={(e) => keyUpEvent(e)}
        />
        <div>
          {keywords.map((v, i) => {
            return (
              <span
                key={v + i}
                className="inline-flex items-center mt-3 mr-5 px-3 py-1 rounded bg-gray-300 text-sm"
              >
                <button
                  type="button"
                  className='mr-3'
                  onClick={() => deleteKeyword(v)}
                >X</button>
                <span className='mr-1 shrink-0' key={v + i}>{"#" + v}</span>
              </span>
            )
          })}
        </div>
      </div>

    </div>
  );
};

export default KeywordInput;