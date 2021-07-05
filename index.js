const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const toAIASCS = require('./controlers');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd',async (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;
// console.log(" africastalking "+ req.body)
    let response = '';
  
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
        console.log("in option2  ");

    }
    else {
        console.log("in mwisho "+ text);
//
        response = `END      `+ await toAIASCS(text.substring(2)) +   `<h1> Hello</h1>                             Asante na karibu tena,` +` tunakutakia majukumu mema katika uzalishaji wa chakula`;
        // text == '1*2'
     }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(process.env.PORT ||3000, () => {
    console.log(`The server is running at localhost: ${3000}`);
  });

