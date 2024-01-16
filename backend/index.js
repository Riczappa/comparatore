const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const axios = require("axios")
app.use(cors()  )
app.use(express.json())
const apiproducts = require("./Routes/api-products")

app.use("/",apiproducts)

const keepAliveUrl = 'http://worldtimeapi.org/api/timezone/Europe/Rome'; // Replace with your server URL

async function keepServerAwake() {
  try{  
  const response = await axios.get(keepAliveUrl)
    console.log(response.data.datetime)
  } catch (error) {
    console.log(error)
  }
}
// Call keepServerAwake every 25 minutes
//setInterval(keepServerAwake, 300000);




// Sample data




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
});
