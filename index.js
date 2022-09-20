// declare package express
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/belajar', (req,res) => {
    res.send("Contoh menggunakan GET")
})

app.listen(PORT, (req,res) => {
    console.log(`Aplikasi berhasil di jalankan pada port : ${PORT}`)
})