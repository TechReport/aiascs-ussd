const axios = require('axios').default;



async function toAIASCS(data){
    await axios.post('https://secret-ridge-42311.herokuapp.com/api/v1/feedback/verify', {
        message: data,
        fromID: '0620419226'
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = toAIASCS;