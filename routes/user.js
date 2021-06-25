const path = require('path')
const express= require('express');
const router = express.Router();
const rootDir = require('../util/path')

const adminData = require('./admin')
router.get('/',(req,res,next)=>{
    console.log('user.js', adminData.users);
    res.sendFile(path.join(rootDir, 'views','user.html'))
})

module.exports = router;