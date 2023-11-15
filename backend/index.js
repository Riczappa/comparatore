const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const axios = require("axios")
app.use(cors()  )
app.use(express.json())

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
    tasso:0.10,
    link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds"
  },
  {
    bank: 'Intesa San Paolo',
    product: 'Risparmio plus',
    image: 'https://www.inas.it/wp-content/uploads/2023/02/logo-intesa-san-paolo_2.png',
    description:"high tax",
    vincolato:"no",
    tasso: 0.05
  },
  {
    bank: 'Illimity',
    product: 'basic vincolato',
    image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
    description:"basic",
    vincolato:"si",
    tasso:{"6m": 0.013, "1yr": 0.0325,"1.5yr": 0.035,"2yr": 0.04,"3yr": 0.05,"4yr": 0.05,"4yr": 0.05},
    link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds"
  
  },
  {
    bank: 'Illimity',
    product: 'basic svincolato',
    image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
    description:"basic",
    vincolato:"no",
    tasso:{"6m": 0.008, "1yr": 0.0225,"1.5yr": 0.025,"2yr": 0.0325,"3yr": 0.0420,"4yr": 0.0420,"4yr": 0.0420},
    link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds"
  
  },
  {
    bank: 'Illimity',
    product: 'premium vincolato',
    image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
    description:"premium",
    vincolato:"si",
    tasso:{"6m": 0.015, "1yr": 0.0350,"1.5yr": 0.0375,"2yr": 0.0450,"3yr": 0.0575,"4yr": 0.0575,"4yr": 0.0575},
    link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds"
  
  },
  {
    bank: 'Illimity',
    product: 'premium svincolato',
    image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
    description:"premium",
    vincolato:"no",
    tasso:{"6m": 0.01, "1yr": 0.0250,"1.5yr": 0.0275,"2yr": 0.0350,"3yr": 0.050,"4yr": 0.050,"4yr": 0.050},
    link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds"
  
  },
];


//calcoliamo il rendimento
function calculateRendimento(product, formData) {
    let tasso;

    
  
    // Select the appropriate rate based on formData.years
    if (formData.years == 0.5) { // Less than or equal to 6 months
      tasso = product.tasso["6m"] ?? 0; // Default to 0 if not available
    } 
    if (formData.years == 1) {
      // For years more than 0.5, use the 1 year rate
      tasso = product.tasso["1yr"] ?? 0; // Default to 0 if not available
    }
    
    if (formData.years == 1.5) {
        // For years more than 0.5, use the 1 year rate
        tasso = product.tasso["1.5yr"] ?? 0; // Default to 0 if not available
      }

      if (formData.years == 2) {
        // For years more than 0.5, use the 1 year rate
        tasso = product.tasso["2yr"] ?? 0; // Default to 0 if not available
      }

    // Compound Interest Calculation
    const principal = formData.capital;
    const timePeriods = formData.years;
    //const interestAppliedPerPeriod = 1; // Assuming annual compounding
    console.log(principal,timePeriods,tasso)
    //const rendimento = principal * Math.pow((1 + tasso / interestAppliedPerPeriod), interestAppliedPerPeriod * timePeriods);
    const rendimento = Math.round(principal * (1+tasso)**(timePeriods))
    return  [(rendimento - principal),tasso];
  }
  
  // Example usage
  const product = {
    bank: 'Illimity',
    product: 'basic vincolato',
    image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
    description: "basic",
    vincolato: "si",
    tasso: {"6m": 0.013, "1yr": 0.0325,"1.5yr": 0.035}
  };
  
  //const formData = { inputValue: '', years: 1.5, capital: 5000, vincolato: 'indif' };
  
  //const rendimento = calculateRendimento(product, formData);
  //console.log(rendimento); // Interest earned over the specified period
  

function add_rendimento(formData) {
    let enhanced_bankingProducts = bankingProducts

    for (let index = 0; index < enhanced_bankingProducts.length; index++) {
        const element = enhanced_bankingProducts[index];
        const rendimento_single=calculateRendimento(element,formData)

        enhanced_bankingProducts[index].resa=rendimento_single[0]
        enhanced_bankingProducts[index].tasso_eff=rendimento_single[1]
        
    }
    return enhanced_bankingProducts
}

//const test=add_rendimento()
//console.log(test)

app.post('/api/products', (req, res) => {
    const formData = req.body;
    console.log(formData)

    const enhanced_bankingProducts = add_rendimento(formData)
    console.log(enhanced_bankingProducts)
  
    res.json(enhanced_bankingProducts);
});





app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
});
