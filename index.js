
import express from 'express'

const app = express();

//루트 라우트 설정

app.get('/' , (req,res) => {

    res.send("<h1>안녕 123</h1>")

})


const PORT = 8000

app.listen(PORT, () => {

    console.log(`서버실행중... 포트${PORT}`)

})