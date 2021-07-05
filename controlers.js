const axios = require('axios').default;

const authToken = process.env.AUTHTOKEN;
const accountSSID = process.env.ACCOUNTSSID;

const client = require('twilio')(accountSSID,authToken);




async function toAIASCS(data){
    await axios.post('https://secret-ridge-42311.herokuapp.com/api/v1/feedback/verify', {
        message: data,
        fromID: '0620419226'
      })
      .then(function (response) {
        console.log((response.data)['message']);
        // console.log(response.data['fromID']);
        // client.messages.create({
        //   to: '+255762434508',
        //   from:"+1 832 734 9551",
        //   body:response.data['message']
        //   }).then((messages)=>{
        //       console.log(messages.sid);
        //       console.log(messages);
          
        //   })
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = toAIASCS;