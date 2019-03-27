import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { Button, Upload, Icon, Input, message } from 'antd';

import { getImageFromRemoteUrl } from '../api';
import { checkFileSize } from '../utils';

import './UploadAction.scss';

const UploadAction = ({ setImageUrl, setIsOpenModal }) => {
  // 預設直版圖片
  const defaultImageUrl = 'https://i.imgur.com/1fUp5uG.jpg';
  // 預設橫版圖片
  // const defaultImageUrl = 'https://i.imgur.com/hIVvFvo.png';
  const [urlInput, setUrlInput] = useState(defaultImageUrl);

  const reader = new FileReader();
  reader.addEventListener('load', () => setImageUrl(reader.result));

  const suffix = urlInput ? (
    <Icon
      type="upload"
      onClick={async () => {
        setIsOpenModal(false);
        const imageUrl = await getImageFromRemoteUrl(urlInput);
        setImageUrl(imageUrl);
      }}
    />
  ) : null;

  return (
    <Fragment>
      <Upload
        name="userImage"
        showUploadList={false}
        beforeUpload={file => {
          const underLimit = checkFileSize(file.size);
          if (underLimit) {
            reader.readAsDataURL(file);
            setIsOpenModal(false);
          } else {
            message.warning('檔案大小超過上限囉 !');
          }
          return false;
        }}
      >
        <Button>
          <Icon type="file" />
          Local File
        </Button>
      </Upload>
      <Input
        placeholder="Enter URL"
        className="uploadAction-urlInput"
        prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={urlInput}
        onChange={e => setUrlInput(e.target.value)}
      />
    </Fragment>
  );
};

UploadAction.propTypes = {
  setImageUrl: PropTypes.func.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};

export default UploadAction;
