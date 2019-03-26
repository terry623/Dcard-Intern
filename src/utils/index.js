import axios from 'axios';

export const getImageFromRemoteUrl = async url => {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    });

    const imageUrl = `data:${
      response.headers['content-type']
    };base64,${Buffer.from(response.data, 'binary').toString('base64')}`;

    return imageUrl;
  } catch (error) {
    console.error(error);
  }
};
