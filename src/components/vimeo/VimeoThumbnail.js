import React, {useEffect, useState} from 'react';
import getVimeoThumbnail from "get-vimeo-thumbnail";
import styles from "../../styles/Video.module.css";

const VimeoThumbnail = ({
  vimeoData,
  openModal,
  }) => {

  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    let vimeoUrl = `https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${vimeoData.videoId}`
    getVimeoThumbnail(vimeoUrl).then((thumbnails) => {
      setThumbnail(thumbnails[2]);
    })
  }, []);

  return (
    <div
      className={`${styles.box} relative inline-flex flex-col w-3/12 mr-4 mb-4 cursor-pointer`}
      onClick={() => openModal(vimeoData)}
    >
      <div className={styles.content}>
        {/*<Vimeo video={vimeoData.videoId} autoplay/>*/}
        <img className={styles.thumbnail} src={thumbnail} alt="" data-video-id={vimeoData.videoId}/>
      </div>
      <div className="mt-3">
        {vimeoData.title}
      </div>
    </div>
  );
};

export default VimeoThumbnail;