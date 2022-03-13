export { }
const express = require('express')
const router = new express.Router()

// Root route
router.get('/s', (req: any, res: any) => {

    console.log('New connection to text page')

    res.render('text');
});

module.exports = router