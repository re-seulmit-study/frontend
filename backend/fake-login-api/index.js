const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

// 미들웨어
app.use(bodyParser.json());
app.use(cors());

// 가상 사용자 데이터
const users = [
  { userId: "testuser", password: "123456", name: "Test User" },
  { userId: "admin", password: "admin123", name: "Admin User" },
];

// 로그인 엔드포인트
app.post("/api/login", (req, res) => {
  const { userId, password } = req.body;

  // 유효성 검사
  if (!userId || !password) {
    return res.status(400).json({ message: "아이디와 비밀번호를 입력해주세요." });
  }

  // 사용자 인증
  const user = users.find(
    (u) => u.userId === userId && u.password === password
  );

  if (user) {
    // 성공 응답
    return res.status(200).json({
      message: "로그인 성공",
      user: { userId: user.userId, name: user.name },
    });
  } else {
    // 실패 응답
    return res.status(401).json({ message: "아이디 또는 비밀번호가 잘못되었습니다." });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`가상 로그인 API 서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
