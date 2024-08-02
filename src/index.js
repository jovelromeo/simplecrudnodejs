const express = require('express')
const { tableGenerator } = require('./dbsimulator')
const app = express()
const port = 3004

app.use(express.json());

let salones = tableGenerator(); // { id, nombre, habilitado, capacidad }
let reservas = tableGenerator(); // { id, idSalon, creador, fecha, asistentes }

app.get('/', async (req, res) => {
  res.send('OK')
})

app.get('/salones', (req, res) => {
    let listadesalones = salones.list()
    res.send(listadesalones)
});

app.post('/salones', (req, res) => {
  let salonCreada = salones.create(req.body)
  res.send(salonCreada)
})

app.get('/salones/:id', (req, res) => {
  let salon = salones.get(req.params.id)
  res.send(salon)
})

app.delete('/salones/:id', (req, res) => {
  let salonEliminada = salones.delete(req.params.id)
  res.send(salonEliminada)
})

app.get('/salones/:idSalon/reservas', (req, res) => {
  let reservasDeSalon = reservas.list().filter(x => x.idSalon == req.params.idSalon)
  res.send(reservasDeSalon)
})

app.post('/salones/:idSalon/reservas', (req, res) => {
  let reservaCreada = reservas.create({idSalon: req.params.idSalon, ...req.body})
  res.send(reservaCreada)
})

app.get('/reservas', (req, res) => {
  let reservasDeSalon = reservas.list()
  res.send(reservasDeSalon)
})

app.get('/reservas/:id', (req, res) => {
  let reserva = reservas.get(req.params.id)
  res.send(reserva)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})