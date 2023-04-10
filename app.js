// const express = require("express");

// const app = express();

// const port = 3010;

// app.get("/", (req, res) => {
//   res.send("Hello, kai");
// });

// app.post("/", (req, res) => {
//   res.json("Hello, kai");
// });

// //get 요청 처음은 해당 경로 접속시, 그다음은 req= 프론트엔드에서 보내주는값 예를들어 로그인시 아이디 입력할때 그값
// //res는 데이터에서 찾고 보내주는거?
// app.listen(port, () => {
//   console.log(`Sever listening on port ${port}`);
// });

const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.get("/abc", (req, res) => {
  res.send("ABC Request");
});

app.post("/", (req, res) => {
  res.send("This is Post Request");
});
app.put("/", (req, res) => {
  res.send("This is Put Request");
});
app.delete("/", (req, res) => {
  res.send("This is delete Request");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
