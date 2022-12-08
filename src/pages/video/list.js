import React, {useState} from 'react';
import SelectGroup from "../../components/selectBox/SelectGroup";
import SearchInput from "../../components/input/SearchInput";
import VimeoThumbnail from "../../components/vimeo/VimeoThumbnail";
import VimeoModal from "../../components/modal/VimeoModal";
import {dummyVimeoList} from "../../dummyData/dummyVimeoList";
import Link from "next/link";

const List = () => {

  const [vimeoList, setVimeoList] = useState(dummyVimeoList);
  const [detailVideo, setDetailVideo] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [inputData, setInputData] = useState("");


  const [searchData, setSearchData] = useState({
    page: 0,
    size: 10,
    orders: [
      {
        direction: 'DESC',
        property: 'createdDate'
      }
    ],
    searchOption: 'ALL',
    searchText: '',
  })

  const selectOptions = [
    {value: 'createDate', name: 'date', text: '날짜순'},
    {value: '', name: 'view', text: '조회수순'}
  ];
  // useEffect(() => {
  //     const result = Axios.get('/video', {
  //         params: {
  //             page: 0,
  //             size: 10,
  //             orders: [
  //                 {
  //                     "direction": "DESC",
  //                     "property": "createdDate"
  //                 }
  //             ],
  //             searchOption: "ALL",
  //         }
  //     }).then((res) => {
  //         console.log(res);
  //     }).catch((err) => {
  //         console.log(err);
  //     });
  //     console.log("video api", result);
  // }, [])

  const setInputValue = (e) => {
    const value = e.value;
    setInputData(value);
    setSearchData({...searchData, 'searchText': value});
  }
  const searchList = () => {
    // let params = searchData;
    // const result = Axios.get('/video', {params}
    // )
    // .then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // });
    // console.log("video api", result);
  }
  const onOpenModal = (data) => {
    setOpenModal(true);
    setDetailVideo(data);
  }
  const onCloseModal = () => {
    setOpenModal(false);
    setDetailVideo("");
  }

  return (
    <>
      <div className='pt-10'>
        <div className='flex flex-col h-screen max-w-screen-2xl mx-auto'>
          <div className="text-2xl font-bold">동영상 가이드</div>
          <div className="flex py-5 border-b border-gray-400 justify-between h-20">
            <div className="flex">
              <SelectGroup
                options={selectOptions}
              />
            </div>
            <div className="flex">
              <button
                className="mr-5 h-full px-4 border border-gray-500"
              >
                <Link href={`/video/create`}>
                  <a>
                    등록(임시)
                  </a>
                </Link>
              </button>
              <button
                className="mr-5 h-full px-4 border border-gray-500"
              >상세검색
              </button>
              <SearchInput
                placeholder='키워드, 제목을 입력해주세요.'
                value={inputData}
                setValue={setInputValue}
                id="searchInput"
                name="searchInput"
                onClick={searchList}
              />
            </div>
          </div>
          <div className="flex flex-wrap py-5">
            {vimeoList.content.map((v) => {
              return (
                <VimeoThumbnail
                  key={v.title + v.id}
                  vimeoData={v}
                  openModal={onOpenModal}
                />
              )
            })}
          </div>
        </div>
      </div>
      {openModal && <VimeoModal closeModal={onCloseModal} vimeoData={detailVideo}/>}
    </>
  );
};

export default List;