const axios = require('axios').default;

const authToken = process.env.AUTHTOKEN;
const accountSSID = process.env.ACCOUNTSSID;

const client = require('twilio')(accountSSID,authToken);




async function toAIASCS(data){



      if(data.length > 13){
return "";
      }else{
        let response =   await axios.post('https://secret-ridge-42311.herokuapp.com/api/v1/feedback/verify', {
          message: data,
          fromID: '0620419226' ,
        });
        if (((response.data)['message']).length <29)
        {
        return (response.data)['message'].toUpperCase();
        }
        else {
          return (response.data)['message'];
        }
      }
      // .then(function (response) {
      
      //   // var number = '+255'+parseInt((response.data)['from'], 10)
      //   // console.log("number is "+number.trim());
      //   // client.messages.create({
      //   //   to: number.trim(),
      //   //   from:"+1 832 734 9551",
      //   //   body:(response.data)['message']
      //   //   }).then((messages)=>{
      //   //       console.log(messages.sid);
      //   //       console.log(messages);
          
      //   //   })
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
}

module.exports = toAIASCS;