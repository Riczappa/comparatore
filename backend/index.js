const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const axios = require("axios")
app.use(cors()  )

const keepAliveUrl = 'https://comparatore-backend.onrender.com'; // Replace with your server URL

function keepServerAwake() {
    axios.get(keepAliveUrl)
        .then(res => console.log(`Response: ${res.statusText}`))
        .catch(err => console.error(`Error: ${err}`));
}

// Call keepServerAwake every 25 minutes
setInterval(keepServerAwake, 1500000);




// Sample data
const bankingProducts = [
  {
    bank: 'Bank A',
    product: 'Savings Account',
    image: 'https://example.com/bank-a-image.jpg',
    description:"high tax"
  },
  {
    bank: 'Bank B',
    product: 'Checking Account',
    image: 'https://example.com/bank-b-image.jpg',
    description:"high tax"
  }
  
];

app.get('/api/products', (req, res) => {
  res.json(bankingProducts);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
});
