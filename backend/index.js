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
    bank: 'Illimity',
    product: 'Conto deposito Plus',
    image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
    description:"high tax",
    vincolato:"si",
    tasso:0.10
  },
  {
    bank: 'Intesa San Paolo',
    product: 'Risparmio plus',
    image: 'https://www.eng.it/resources/customer-logo/intesa/intesa-white.png',
    description:"high tax",
    vincolato:"no",
    tasso: 0.05
  }
  
];

app.get('/api/products', (req, res) => {
  res.json(bankingProducts);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
});
