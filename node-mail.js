/**
 * Node.js와 nodemailer를 사용한 예제입니다.
 * 
 */
const nodemailer = require('nodemailer');

//-- 이 부분은 mailtrap.io 에서 받아와야함.
const email = {
  host: "value",
  port: 0,
  auth: {
    user: "value",
    pass: "value"
  }
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

//-- 이 부분은 메일 전송에 필요한 데이터 부분입니다.
let email_data = {
  from: '보내는 이메일 주소',
  to: '받는 이메일 주소',
  subject: '제목',
  text: '이메일 전송 내용'
};

send(email_data);