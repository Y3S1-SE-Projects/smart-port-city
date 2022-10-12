const express = require('express')
const Room = require('../model/room')
const router = express.Router()
 
router.get('/getallrooms', async(req, res)=>{
    try{
  const rooms=await Room.find({})
  res.send(rooms)

    } catch(error){
        return res.status(400).json({message:error});
    }
});

router.post('/getroombyid', async(req, res)=>{
    const roomid=req.body.roomid
    try{
  const room=await Room.findOne({_id:roomid})
  res.send(room)

    } catch(error){
        return res.status(400).json({message:error});
    }
});
 

module.exports = router;