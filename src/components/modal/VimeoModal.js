import React, {useEffect, useState} from 'react';
import Vimeo from "@u-wave/react-vimeo";
import {ProgressBar} from 'react-loader-spinner'
import videoStyles from "../../styles/Video.module.css"

const VimeoModal = ({
                      closeModal,
                      vimeoData,
                    }) => {

  const [videoData, setVideoData] = useState("");

  useEffect(() => {
    if (vimeoData) {
      setVideoData(vimeoData);
    }
  }, [])

  return (
    <div className="w-screen h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black
    bg-opacity-70 text-center">
      <div className="bg-white rounded w-10-12 md:w-9/12">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-bold">비디오 상세</h3>
          <button onClick={() => closeModal()}>
            X
          </button>
        </div>
        {videoData ?
          <>
            <div className={`${videoStyles.videoContent}`}>
              <Vimeo video={videoData.videoId}
                     autoplay
                     webkitallowfullscreen
                     mozallowfullscreen
                     allowfullscreen
                     showTitle={false}
                     showPortrait={false}
                     showByline={false}
                     frameborder="0"
              />
            </div>
            <div className={`${videoStyles.videoInfo} px-10 py-5 text-left`}>
              <div className="text-lg">{videoData.title}</div>
              <div className="text-xs text-gray-500">{videoData.uploadDateTime}</div>
              <div className="text-lx mt-5 mb-5">{videoData.content}</div>
              <div className="text-sm mt-5 mr-2 text-red-700">
                관련 키워드 :
                {videoData.keyword.map((v, i) => {
                  return <span className="ml-2" key={v+i}>{'#'+v}</span>
                })}
              </div>


            </div>
          </>
          :
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='#F4442E'
            barColor='#51E5FF'
          />
        }
        <div className="flex justify-end items-center w-100 p-3 text-gray-500">
          <button
            className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white"
            onClick={() => closeModal()}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default VimeoModal;