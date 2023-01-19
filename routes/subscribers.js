const express = require('express');
const router = express.Router();

//Getting all
router.get('/', (req, res) => {
    res.send('Hello from NodeJS')
});

//Getting one

router.get('/:id', (req, res) => {
res.send(req.params.id);
});
//Creating one

router.post('/', (req, res) => {
    res.send('Test')

});
//Updating one

router.patch('/:id', (req, res) => {
    res.send('Test')

});
//Deleting one

router.delete('/:id', (req, res) => {
    res.send('Test')

});

module.exports = router;