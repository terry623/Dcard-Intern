import axios from 'axios';

export const getImageFromRemoteUrl = async url => {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
