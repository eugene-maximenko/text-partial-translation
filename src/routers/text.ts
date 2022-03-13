export { }
const express = require('express')
const router = new express.Router()

// Root route
router.get('', (req: any, res: any) => {

    console.log('New connection to text page')

    res.render('text');
});

router.get('/text', (req: any, res: any) => {
    console.log('Server get request for text');

    res.json({
        'text': 'Router text'
    })
})

module.exports = router