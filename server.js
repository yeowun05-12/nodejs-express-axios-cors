// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

let data = { message: '여러분 화이팅!' };

app.use(cors());
app.use(express.text()); // 요청 본문을 텍스트로 파싱

// get 요청 - 메시지 가져오기
app.get('/', (req, res) => {
  res.json(data);
});

// PUT 요청 - 메시지 업데이트
app.put('/', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

//DELETE 요청 - 메시지 삭제
app.delete('/', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

//서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중 입니다.`);
});
