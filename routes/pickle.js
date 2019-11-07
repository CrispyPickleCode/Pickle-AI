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
    } else {
        msg = `Hmmm, I\'ve never heard of a ${type} pickle before`;
    }

    res.send(msg);
})

module.exports = router;