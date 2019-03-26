import React, { Fragment, useState } from 'react';
import { Upload, Icon, Modal } from 'antd';

const UploadAction = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  return (
    <Fragment>
      <Upload
        action=""
        listType="picture-card"
        fileList={fileList}
        onPreview={file => {
          setPreviewImage(file.url || file.thumbUrl);
          setPreviewVisible(true);
        }}
        onChange={info => setFileList(info.fileList)}
      >
        {fileList.length >= 3 ? null : <Icon type="plus" />}
      </Upload>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </Fragment>
  );
};

export default UploadAction;
