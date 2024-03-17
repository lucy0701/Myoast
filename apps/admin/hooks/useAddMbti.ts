import { DOMAIN_BE_PROD } from '@/constants/constant';
import { TOKEN_NAME } from '@/constants/sessionStorage';
import { postAddMbtiTestAPI } from '@/services/addMbtiTset';
import { mbtiTestDataState } from '@/states/testDataState';
import { mbtiImageState } from '@/states/testImageState';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

type HeaderProps = {
  'Content-Type': string;
  Authorization?: string | null;
};

export const useAddMbti = () => {
  const imageUploads = useRecoilValue(mbtiImageState);
  const [mbtiTestData, setMbtiTestData] = useRecoilState(mbtiTestDataState);
  const [imgUploading, setImgUploading] = useState(true);

  const headers: HeaderProps = {
    'Content-Type': 'multipart/form-data',
    Authorization:
      typeof window !== 'undefined' ? sessionStorage.getItem(TOKEN_NAME) : null,
  };

  const postImageUpload = async () => {
    try {
      const uploadedImages: string[] = [];

      setImgUploading(true);
      for (const fdata of imageUploads) {
        const formData = new FormData();
        formData.append('file', fdata);

        const response = await axios.post(
          `${DOMAIN_BE_PROD}/upload`,
          formData,
          { headers },
        );
        uploadedImages.push(response.data);
      }

      const updatedResults = uploadedImages.slice(1).map((imageUrl, idx) => ({
        ...mbtiTestData.results[idx],
        imageUrl,
      }));

      setMbtiTestData((prev) => ({
        ...prev,
        imageUrl: uploadedImages[0],
        results: updatedResults,
      }));


      setImgUploading(false);
    } catch (error) {
      console.error('Error during image upload:', error);
      alert('이미지 업로드 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (!imgUploading) {
      const mbtiTestJSON = JSON.stringify(mbtiTestData);
      postAddMbtiTestAPI(mbtiTestJSON);
    }
  }, [imgUploading]);

  useEffect(() => {
    if (!imgUploading) {
      alert('이미지 업로드가 완료되었습니다.');
    }
  }, [imgUploading]);

  return {
    postImageUpload,
  };
};
