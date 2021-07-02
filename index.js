const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

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

    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON Karibu Katika mfumo wa AIASCS ,Chagua Huduma Kuendelea
        1. Kuhakiki Pembejeo
        2. Kutoa Mrejesho `;
    } else if ( text == '1') {
        // Business logic for first level response
        response = `CON Ingiza namba ya kuhakiki pembejeo hapa chini `;
        // number hii hapa
        
    }  else if( text == '2'){
        response = `CON Ingiza mrejesho wako hapa chini `;
        console.log("1. MREJESHO WENYEWE UNASEMA HIVI "+ text);
    
    }
    else {
        if(text.length == 10){
            response = `END Asante na karibu tena, tunakutakia majukumu mema katika uzalishaji wa chakula`;
            console.log("tumepata lenght ya number ya simu")
        }
        // This is a terminal request. Note how we start the response with END
        response = `END Asante na karibu tena, tunakutakia majukumu mema katika uzalishaji wa chakula`;
        console.log("2. MREJESHO WENYEWE UNASEMA HIVI "+ text);

    }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(process.env.PORT ||3000, () => {
    console.log(`The server is running at localhost: ${3000}`);
  });

