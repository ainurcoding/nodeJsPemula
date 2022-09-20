// declare package express
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/belajar', (req, res) => {
    res.send("Contoh menggunakan GET")
})

// put : biasa digunakan untuk mengupdate data
app.put('/belajar', (req, res) => {
    res.send('Contoh menggunakan put')
})
//  post biasa digunakan untuk mengirim data dari form
app.post('/belajar', (req, res) => {
    res.send('Contoh menggunakan POST')
})

// delete
app.delete('/belajar',(req,res) => {
    res.send('Contoh menggunakan DELETE');
})

app.listen(PORT, (req, res) => {
    console.log(`Aplikasi berhasil di jalankan pada port : ${PORT}`)
})