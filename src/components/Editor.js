import React, { Fragment, useState, useEffect } from 'react';
import { Button } from 'antd';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import UploadModal from './UploadModal';

import './Editor.scss';

const Editor = () => {
  let cropper;
  const targetImageId = 'targetImageId';

  // const [imageUrl, setImageUrl] = useState('https://i.imgur.com/1fUp5uG.jpg');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const image = document.getElementById(targetImageId);
    if (image) cropper = new Cropper(image);
  }, [imageUrl]);

  return (
    <Fragment>
      {imageUrl && (
        <div className="editor-imageWrapper">
          <img
            id={targetImageId}
            src={imageUrl}
            className="editor-imageWrapper-userImage"
            alt="imageUrl"
          />
        </div>
      )}
      <Button
        onClick={() => {
          const canvasImage = cropper.getCroppedCanvas();
          const dataURL = canvasImage.toDataURL();
          const img = new Image();
          img.src = dataURL;
          document.body.appendChild(img);
        }}
      >
        OUTPUT
      </Button>
      <UploadModal setImageUrl={setImageUrl} />
    </Fragment>
  );
};

export default Editor;
