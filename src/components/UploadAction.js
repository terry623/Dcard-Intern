import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { Button, Upload, Icon, Input } from 'antd';

import { getImageFromRemoteUrl } from '../utils';

const UploadAction = ({ setImageUrl, setIsOpenModal }) => {
  const [urlInput, setUrlInputl] = useState('');

  const reader = new FileReader();
  reader.addEventListener('load', () => setImageUrl(reader.result));

  const suffix = urlInput ? (
    <Icon
      type="close-circle"
      onClick={() => {
        const imageUrl = getImageFromRemoteUrl('');
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
          console.log(file);
          reader.readAsDataURL(file);
          setIsOpenModal(false);
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
        prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={urlInput}
        onChange={e => setUrlInputl(e.target.value)}
      />
    </Fragment>
  );
};

UploadAction.propTypes = {
  setImageUrl: PropTypes.func.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};

export default UploadAction;
