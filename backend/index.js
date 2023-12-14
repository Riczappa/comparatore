const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const axios = require("axios")
app.use(cors()  )
app.use(express.json())
const apiproducts = require("./Routes/api-products")

app.use("/",apiproducts)

const keepAliveUrl = 'https://comparatore-backend.onrender.com'; // Replace with your server URL

function keepServerAwake() {
    axios.get(keepAliveUrl)
        .then(res => console.log(`Response: ${res.statusText}`))
        .catch(err => console.error(`Error: ${err}`));
}

// Call keepServerAwake every 25 minutes
setInterval(keepServerAwake, 1500000);




// Sample data




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
});
