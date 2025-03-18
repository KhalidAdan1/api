const express = require('express');
const router = express.Router();
import logindetails from '../model/logindetails';

module.exports = router;



router.get('/:id',  (req , res) => {
res.send(req.params.id);
})

router.post('/', async (req , res) => {
    const login = new logindetails({
        name: req.body.name,
        required : req.body.required
    })
    try {
        const log = await login.save()
        res.status(201).json(log);
    } catch (error) {
        res.status(400).json({message : error})
    }

})
