const express = require('express')
const routes = express.Router()
const fs = require('fs')
const data = require('./data.json')

routes.get('/', (req, res) => res.sendStatus(200))

routes.get('/patients', (req, res) => { return res.json(data.patients) })

routes.post('/patients', (req, res) => {
    const {
        name,
        age,
        weight,
        height,
        symptoms
    } = req.body

    data.patients.push({
        name,
        age,
        weight,
        height,
        symptoms
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 4), (error) => {
        if (error) return res.status(400).json({
            message: "Error while registering patient"
        })
    })
    return res.send(req.body)
})

routes.put('/patients/:id', (req, res) => {
    data.patients = data.patients.map(patient => {
        if (patient.id == req.params.id) {
            return ({
                ...patient,
                ...req.body
            })
        } else {
            return patient
        }
    })

    return res.json(data.patients[req.params.id - 1])
})

routes.delete('/patients/:id', (req, res) => { 
    const filteredPatients = data.patients.filter(patient => patient.id != req.params.id)
    data.patients = filteredPatients

    fs.writeFile('data.json', JSON.stringify(data, null, 4), (error) => {
        if (error) return res.status(400).json({
            message: "Error while deleting patient"
        })
    })

    return res.json(data.patients)
})

module.exports = routes