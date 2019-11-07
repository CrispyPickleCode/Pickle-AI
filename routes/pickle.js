const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('I love pickles, which do you like?');
});

router.get('/:type', (req, res, next) => {
    const type = req.params.type;
    var msg = '';
    if (type === 'dill'){
        msg = 'Wow, I love dill pickles! They are so sweet!';
    } else if (type === 'spicy') {
        msg = 'Spicy pickles are good in small quantities';
    } else if (type ==== 'sour') {
        msg = 'Sour pickles, the classic pickle'
    } else {
        msg = `Hmmm, I\'ve never heard of a ${type} pickle before`;
    }

    res.send(msg);
})

module.exports = router;