import React, { Fragment, useState } from 'react';
import UploadModal from './UploadModal';

import './Editor.scss';

const Editor = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <Fragment>
      {imageUrl && (
        <img src={imageUrl} className="editor-userImage" alt="imageUrl" />
      )}
      <UploadModal setImageUrl={setImageUrl} />
    </Fragment>
  );
};

export default Editor;
