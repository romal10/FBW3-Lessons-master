const express = require ('express');
//const colors = require ( 'colors');
const app = express();
app.get('/', (req,res)=>{
    res.json({msg:'welcome to contacts app api'})
})
// Define routes
app.use('/api/users', require('/routes/users'));
app.use('/api/contacts', require('/routes/contacts'));
app.use('/api/auth', require('/routes/auth'));







const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=> console.log(`server started on port  ${PORT} ` ))