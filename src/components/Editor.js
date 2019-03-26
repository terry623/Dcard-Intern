import React, { useState, useEffect, Fragment } from 'react';
import { Button, Icon } from 'antd';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

// import UploadModal from './UploadModal';

import './Editor.scss';

const Editor = () => {
  let cropper;
  const targetImageId = 'targetImageId';

  // 不放預設圖片
  // const defaultImageUrl = '';
  // 預設直版圖片
  const defaultImageUrl = 'https://i.imgur.com/1fUp5uG.jpg';
  // 預設橫版圖片
  // const defaultImageUrl = 'https://i.imgur.com/hIVvFvo.png';

  const [imageUrl, setImageUrl] = useState(defaultImageUrl);

  useEffect(() => {
    const image = document.getElementById(targetImageId);
    if (image) {
      cropper = new Cropper(image);
    }
  }, [imageUrl]);

  return (
    <div className="editor">
      {imageUrl && (
        <Fragment>
          <div className="editor-toolBox">
            <Button
              type="primary"
              className="editor-toolBox-finishCrop"
              onClick={() => {
                const canvasImage = cropper.getCroppedCanvas();
                const dataURL = canvasImage.toDataURL();
                console.log(dataURL);
              }}
            >
              FINISH
              <Icon type="caret-right" />
            </Button>
          </div>
          <div className="editor-imageArea">
            <div className="editor-imageArea-imageWrapper">
              <img
                id={targetImageId}
                src={imageUrl}
                className="editor-imageArea-imageWrapper-userImage"
                alt="imageUrl"
              />
            </div>
          </div>
        </Fragment>
      )}
      {/* <UploadModal setImageUrl={setImageUrl} /> */}
    </div>
  );
};

export default Editor;
