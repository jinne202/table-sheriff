import thumbnail from 'resources/thumbnail.png';
import companyImg from 'resources/companyImg.png';

export const dummy = {
  companyName: '해선',
  companyAddress: '경기도 성남시 분당구 수내로46번길 11 112호',
  entireProduct: '5',
  safetyProduct: '5',
  companyContact: '050-71392-6912',
  latitude: 37.3800066,
  longitude: 127.1170061,
  thumbnail: thumbnail,
  companyImg: companyImg,
  product: [
    {
      productName: '광어',
      origin: '국내',
      status: null,
    },
    {
      productName: '도미',
      origin: '국내',
      status: true,
    },
    {
      productName: '홍민어',
      origin: '중국',
      status: null,
    },
    {
      productName: '낙지',
      origin: '중국',
      status: true,
    },
    {
      productName: '멍게',
      origin: '국내',
      status: true,
    },
  ],
};
