import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Button, Upload, Icon } from 'antd';

const UploadAction = ({ setImageUrl, setIsOpenModal }) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => setImageUrl(reader.result));

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
        <Button >
          <Icon type="upload" />
          Click to Upload
        </Button>
      </Upload>
    </Fragment>
  );
};

UploadAction.propTypes = {
  setImageUrl: PropTypes.func.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};

export default UploadAction;
