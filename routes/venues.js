const express = require('express');
const router  = express.Router();
const axios = require('axios')
const {URLSearchParams} = require('url')

router.post('/getVenues', (req, res, next) => {
  const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
  const URL = endPoint+`client_id=HKDU5BT2ZSWE10AYKQ55HFL3IXDSC3IIPG4I54IOZRZVCBRW&client_secret=NAU4XP51HWZKTNCWYJLSDUN5J3Y2WRZO15SNAY21R2EHDEPC&ll=${req.body.lat},${req.body.lng}&query=${req.body.place}&v=20182507`;
  axios.get(URL)
  .then(response=>{
    res.status(201).json(response.data.response.groups[0].items)
  })
  .catch(error=>console.log(error))
});

module.exports = router;
