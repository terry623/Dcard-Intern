import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

import UploadAction from './UploadAction';

const UploadModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setIsOpenModal(true);
  }, []);

  return (
    <Modal
      title="Upload"
      visible={isOpenModal}
      onOk={() => setIsOpenModal(false)}
      onCancel={() => setIsOpenModal(false)}
    >
      <UploadAction />
    </Modal>
  );
};

export default UploadModal;
