const express = require('express')
const app = express()
const PORT = 3000

const rappers = {
    '21savage':{
        'age': 29,
    'birthLocation': 'London, UK',
    'birthName': 'Sheyaa Bin Abraham-Lincoln'},
    'chance the rapper':{
        'age': 29,
    'birthLocation': 'Chicago, Illinois',
    'birthName': 'Chicago,Illinois'},
    'dylan':{
        'age': 29,
    'birthLocation': 'Chicago, Illinois',
    'birthName': 'Dylan'}

}
app.get('/',(request,response) =>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName',(request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }
    else{
        response.json(rappers['dylan'])
    }
})
app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}, you better go catch it.`)
})