import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Modal } from 'antd';

import UploadAction from './UploadAction';

const UploadModal = ({ setImageUrl }) => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  return (
    <Modal
      title="Upload Your Favourite Pictures"
      bodyStyle={{ display: 'flex', justifyContent: 'center' }}
      visible={isOpenModal}
      closable={false}
      footer={null}
      centered
    >
      <UploadAction setImageUrl={setImageUrl} setIsOpenModal={setIsOpenModal} />
    </Modal>
  );
};

UploadModal.propTypes = {
  setImageUrl: PropTypes.func.isRequired,
};

export default UploadModal;
