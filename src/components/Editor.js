import React, { useState, useEffect, Fragment } from 'react';
import { Button } from 'antd';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import UploadModal from './UploadModal';
import { drawImage } from '../utils';

import './Editor.scss';

const Editor = () => {
  const targetImageId = 'targetImageId';
  const imageWrapperId = 'imageWrapperId';
  const imageCanvasId = 'imageCanvasId';

  // 不放預設圖片
  const defaultImageUrl = '';
  // 預設直版圖片
  // const defaultImageUrl = 'https://i.imgur.com/1fUp5uG.jpg';
  // 預設橫版圖片
  // const defaultImageUrl = 'https://i.imgur.com/hIVvFvo.png';

  const [imageUrl, setImageUrl] = useState(defaultImageUrl);
  const [haveCanvas, sethaveCanvas] = useState(false);
  const [cropper, setCropper] = useState(null);

  useEffect(() => {
    const image = document.getElementById(targetImageId);
    if (image) {
      setCropper(new Cropper(image));
    }
  }, [imageUrl]);

  return (
    <div className="editor">
      {imageUrl && (
        <Fragment>
          <div className="editor-toolBox">
            {!haveCanvas ? (
              <Button
                type="primary"
                className="editor-toolBox-finishCrop"
                onClick={() => {
                  const canvasImage = cropper.getCroppedCanvas({
                    maxWidth: window.innerWidth * 0.3,
                  });

                  canvasImage.id = imageCanvasId;
                  const imageWrapper = document.getElementById(imageWrapperId);
                  imageWrapper.replaceChild(
                    canvasImage,
                    imageWrapper.childNodes[0]
                  );
                  cropper.destroy();
                  drawImage(imageCanvasId);
                  sethaveCanvas(true);
                }}
              >
                完成裁切
              </Button>
            ) : (
              <div className="editor-toolBox-save">
                <h2>用滑鼠隨便塗鴉 ! 並將圖片存起來吧 😍</h2>
              </div>
            )}
          </div>
          <div className="editor-imageArea">
            <div className="editor-imageArea-imageWrapper" id={imageWrapperId}>
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
      <UploadModal setImageUrl={setImageUrl} />
    </div>
  );
};

export default Editor;
