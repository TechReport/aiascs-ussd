const axios = require('axios').default;



async function toAIASCS(data){
    await axios.post('/user', {
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