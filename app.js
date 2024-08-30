const express=require('express');
const axios=require('axios');
const app=express();
const apiKey='b407e7cb4e977583c44947d08b582a89';
app.get('/get/:location', async(req, res)=>{
    try {
        const location = req.params.location;
        const url=`http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;
        const response = await axios.get(url,{
            headers:{
                'Accept':'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error : 'An error occurred while fetching data'});
        
    }
});
const port=3003;
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});