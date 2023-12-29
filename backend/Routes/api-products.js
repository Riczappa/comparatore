const express = require("express");
const router = express.Router()
const bankingProducts = require("../Data/BankData")



//calcoliamo il rendimento
function calculateRendimento(product, formData) {
    let tasso;

    let maxMonthAvailable = "60"; // Maximum year data available

if (formData.months <= 6) {
  tasso = product.tasso["6"] ?? 0;
} else if (formData.months <= 12) {
  tasso = product.tasso["12"] ?? 0;
} else if (formData.months <= 18) {
  tasso = product.tasso["18"] ?? 0;
} else if (formData.months <= 24) {
  tasso = product.tasso["24"] ?? 0;
} else if (formData.months <= 32) {
  tasso = product.tasso["32"] ?? 0;
} else {
  // For years more than 1.5, check if the year's rate is available, otherwise default to the max available year's rate
  let monthKey = formData.months;
  tasso = product.tasso[monthKey] ?? product.tasso[maxMonthAvailable];
}
  
    // Compound Interest Calculation
    const principal = formData.capital;
    const timePeriods = formData.months/12;
    //const interestAppliedPerPeriod = 1; // Assuming annual compounding
    //console.log(principal,timePeriods,tasso)
    //const rendimento = principal * Math.pow((1 + tasso / interestAppliedPerPeriod), interestAppliedPerPeriod * timePeriods);
    const rendimento = Math.round(principal * (1+tasso)**(timePeriods))
    return  [(rendimento - principal),tasso];
  }
  
  

function add_rendimento(formData) {
    let enhanced_bankingProducts = bankingProducts

    for (let index = 0; index < enhanced_bankingProducts.length; index++) {
        const element = enhanced_bankingProducts[index];
        const rendimento_single=calculateRendimento(element,formData)

        enhanced_bankingProducts[index].resa=rendimento_single[0]
        enhanced_bankingProducts[index].tasso_eff=rendimento_single[1]
        console.log(enhanced_bankingProducts)
        
    }
    return enhanced_bankingProducts
}


router.post('/api/products', (req, res) => {
    const formData = req.body;
    console.log(formData)

    const enhanced_bankingProducts = add_rendimento(formData)
    //console.log(enhanced_bankingProducts)
  
    res.json(enhanced_bankingProducts);
});

module.exports = router