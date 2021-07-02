const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const toAIASCS = require('./controlers');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;
// console.log(" africastalking "+ req.body)
    let response = '';
    console.log("data are "+,toAIASCS("7e0b1cd2-cb69-49b1-80e9-9107835873d6"));
    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON Karibu Katika mfumo wa AIASCS ,Chagua Huduma Kuendelea
        1. Kuhakiki Pembejeo
        2. Kutoa Mrejesho 
        3. Toka
        `;
        // response = `CON Ingiza Number yako  simu mfano: 0712949471 `;
    } else if ( text == '1') {
        // Business logic for first level response
        response = `CON Ingiza namba ya kuhakiki pembejeo hapa chini `;
        // number hii hapa
        
    }  
    else if( text == '2'){
        response = `CON Ingiza mrejesho wako hapa chini `;
    
    }
    else {
      
        response = `END Asante na karibu tena,` + toAIASCS(data) +` tunakutakia majukumu mema katika uzalishaji wa chakula`;
        // text == '1*2'
     }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(process.env.PORT ||3000, () => {
    console.log(`The server is running at localhost: ${3000}`);
  });

