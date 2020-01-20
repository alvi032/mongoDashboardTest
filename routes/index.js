const express = require('express')
const router = express.Router()

const Random = require('../models/random')

router.get('/', (req, res) => res.render('home'))
router.get('/create', (req, res) => res.render('create'))
router.get('/entries', (req, res) => {
    Random.find({}, (err, randoms) => {
        if(err) throw err
        // console.log(randoms)
        res.render('entries', {
            name: randoms[0].name,
            defination: randoms[0].defination,
            count: randoms[0].count
        })
    })
})
router.get('/update', (req, res) => {
    Random.findById('5e2591cda355382e3c98c19a', (err, randoms) => {
        if(err) throw err

        res.render('update', {
            name :  randoms.name,
            defination : randoms.defination,
            count : randoms.count
        })
    })
})


router.post('/entry', (req, res) => {
    const {name, defination, count} = req.body
    const newEntry = new Random({
        name,
        defination,
        count
    })

    newEntry.save()
        .then(random => {
            console.log('created entry')
            res.send('Hello')
        })
        .catch(err => console.log(err))
})

router.post('/update', (req, res) => {
    const {name, defination, count} = req.body
    Random.findByIdAndUpdate('5e2591cda355382e3c98c19a', {
        name,
        defination,
        count
        }, (err, randoms)=>{
        if(err) throw err
        console.log(randoms)
    })
/*    console.log(name)
    res.send('done')*/
    res.render('update', {
        name,
        defination,
        count
    })
})


module.exports = router