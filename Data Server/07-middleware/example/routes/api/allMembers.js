const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');

// get all the members
router.get('/',(req,res)=>  {
    res.json(members);

});

// get the selected member
router.get('/:id' ,(req,res) => {
    // some is similar to filter but gives true or false
    const found = members.some(item => item.id ===parseInt(req.params.id));
    if(found){
        res.json(
            members.filter( item => item.id === parseInt(req.params.id) )
        );  
    }
    else{
        res.status(400).json({ msg: `No member with the id of ${req.params.id} `  })
    }
  
} );

// create member 
router.post('/',(req,res)=> {
    //res.send(req.body);
    const newMmber ={
        id :uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:req.body.status
    };
    //res.send(newMmber);
    if(!newMmber.name || !newMmber.email){
        return res.status(400).json({ msg : 'Please include a name and email'})
    }
     members.push(newMmber);
     res.json(members);
});

// upadate a member 
router.put('/:id',(req,res)=>{
    const found = members.some(item => item.id ===parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach( member=>{

            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email= updMember.email ? updMember.email : member.email;
                member.status= updMember.status ? updMember.status : member.status;
                res.json({ msg : 'Member updated' ,member })

            }
        })
    }
    else{
        res.status(400).send({ msg : ` No member with the id of ${req.params.id} `  });
    }
 
});
//delete a member
router.delete('/:id',(req,res)=>{
    const found = members.some(item => item.id ===parseInt(req.params.id));
    if(found){
       members.forEach( (CheckUSer,index)=>{
           if(CheckUSer.id === parseInt(req.params.id)){
               members.splice(index,1);
               res.status(200).json({msg:'Bingoo we found the User ID',members})
           }
       }
       ) 
    }else{
        res.status(404).send({msg:'Oppppsss the Id wanst Found'},id);
    }

})
// router.delete('/:id',(req,res)=>{
//     const found = members.some(item => item.id ==req.params.id);
//     console.log(typeof req.params.id);
    
//     if(found){
//         res.json({
//             msg : 'Member deleted',
//             members: members.filter((member)=>{
//                 if(member.id != req.params.id){
//                     return member;
//                 }

//             })
//         })
//     }
//     else{
//         res.status(400).json({ msg: `Ǹo Member with the id of ${req.params.id}`})
//     }

// })
module.exports = router