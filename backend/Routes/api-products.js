const express = require("express");
const router = express.Router()
const bankingProducts = require("../Data/BankData")



//calcoliamo il rendimento
function calculateRendimento(product, formData) {
    let tasso;

    let maxYearAvailable = "2yr"; // Maximum year data available

if (formData.years <= 0.5) {
  tasso = product.tasso["6m"] ?? 0;
} else if (formData.years <= 1) {
  tasso = product.tasso["1yr"] ?? 0;
} else if (formData.years <= 1.5) {
  tasso = product.tasso["1.5yr"] ?? 0;
} else {
  // For years more than 1.5, check if the year's rate is available, otherwise default to the max available year's rate
  let yearKey = formData.years + "yr";
  tasso = product.tasso[yearKey] ?? product.tasso[maxYearAvailable];
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


router.post('/api/products', (req, res) => {
    const formData = req.body;
    console.log(formData)

    const enhanced_bankingProducts = add_rendimento(formData)
    console.log(enhanced_bankingProducts)
  
    res.json(enhanced_bankingProducts);
});

module.exports = router