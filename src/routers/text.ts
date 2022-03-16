export { }
const {constructText} = require('../lib/textHandlers')
const englishText = require('../../db/text/texts.js')
const express = require('express')
const router = new express.Router()

// Root route
router.get('', (req: any, res: any) => {

    console.log('New connection to text page')

    res.render('text');
});

router.get('/texts', (req: any, res: any) => {

    console.log(constructText(englishText));
    res.json({
        'text': constructText(englishText)
    })
})

module.exports = router