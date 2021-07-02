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
        response = `CON Karibu Katika mfumo wa AIASCS ,chagua lugha ili kuendelea 
        1. Kiswahili`;
    } else if ( text == '1') {
        // Business logic for first level response
        response = `CON Chagua huduma unayohitaji kati ya huduma zetu zifuatazo
        3. Kuhakiki Pembejeo
        4. Kutoa Mrejesho `;
        if( text == '3')
        {
            response = `CON Ingiza namba ya kuhakiki pembejeo hapa chini `;
            // number hii hapa
        }
        else if(text == '4')
        {
            response = `CON Ingiza mrejesho wako hapa chini `;
          
        }
    }  else{

        // This is a terminal request. Note how we start the response with END
        response = `END Asante na karibu tena, tunakutakia majukumu mema katika uzalishaji wa chakula`;
    }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(process.env.PORT ||3000, () => {
    console.log(`The server is running at localhost: ${3000}`);
  });

