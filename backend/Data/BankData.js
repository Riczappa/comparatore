const bankingProducts = [
  
  
    {
      bank: 'Illimity',
      product: 'basic vincolato',
      image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
      description:"basic",
      vincolato:"si",
      tasso:{"6": 0.013, "12": 0.0325,"18": 0.035,"24": 0.04,"36": 0.05,"48": 0.05,"60": 0.05},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf"
    
    },
    {
      bank: 'Illimity',
      product: 'basic svincolato',
      image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
      description:"basic",
      vincolato:"no",
      tasso:{"6": 0.008, "12": 0.0225,"18": 0.025,"24": 0.0325,"36": 0.0420,"48": 0.0420,"60": 0.0420},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf"
    },
    {
      bank: 'Illimity',
      product: 'premium vincolato',
      image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.015, "12": 0.0350,"18": 0.0375,"24": 0.0450,"36": 0.0575,"48": 0.0575,"60": 0.0575},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf"
    
    },
    {
      bank: 'Illimity',
      product: 'premium svincolato',
      image: 'https://ml.globenewswire.com/Resource/Download/67167262-335a-4f11-90e0-d682b134e43f?size=3',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.01, "12": 0.0250,"18": 0.0275,"24": 0.0350,"36": 0.050,"48": 0.050,"60": 0.050},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf"
    
    },
    {
      bank: 'Tinaba',
      product: 'start svincolabile',
      image: 'https://store.tinaba.it/static/logo_tinaba_colore_orizzontale-b7e95e37455e09d709fec579fae8523c.svg',
      description:"start",
      vincolato:"no",
      tasso:{"6": 0.018, "12": 0.020,"18": 0.025,"24": 0.0250,"36": 0.0250,"48": 0.0250},
      link: "https://bancaprofilo.tinaba.it/conto-deposito"
    
    },
    {
      bank: 'Tinaba',
      product: 'premium svincolabile',
      image: 'https://store.tinaba.it/static/logo_tinaba_colore_orizzontale-b7e95e37455e09d709fec579fae8523c.svg',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.035, "12": 0.040,"18": 0.045,"24": 0.04,"36": 0.04,"48": 0.04},
      link: "https://bancaprofilo.tinaba.it/conto-deposito"
    
    },
    {
      bank: 'Aixeda',
      product: 'Banca Aixeda X risparmio vincolato',
      image: 'https://www.zeroventiquattro.it/wp-content/uploads/2023/02/aidexa.jpg',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.05, "12": 0.05,"18": 0.055,"24": 0.055,"36": 0.05,"48": "n.a."},
      link: "https://hb.aidexa.it/onboarding/fe/03625/aidexa/#/step/1"
    
    },
    {
      bank: 'Aixeda',
      product: 'Banca Aixeda X risparmio libero',
      image: 'https://www.zeroventiquattro.it/wp-content/uploads/2023/02/aidexa.jpg',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.04, "12": 0.04,"18": 0.04,"24": 0.04,"36": 0.04,"48": 0.04},
      link: "https://hb.aidexa.it/onboarding/fe/03625/aidexa/#/step/1",
      liquidazione: "ogni 3 mesi sul conto corrente"
    
    },
    {
      bank: 'Vivibanca',
      product: 'Viviconto extra',
      image: 'https://vivibanca.it/images/logo%20italia.png',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.0425, "12": 0.05,"18": 0.0525,"24": 0.055,"36": 0.05,"48": "n.a."},
      link: "https://vivibanca.it/conto-deposito-viviconto",
      liquidazione: "alla scadenza del vincolo di deposito insieme al rimborso del capitale"
    
    },
    {
      bank: 'Banca Ifis',
      product: 'vincolato',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Nuovo_Logo_Banca_Ifis.jpg',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.0375, "12": 0.04,"18": 0.0425,"24": 0.050,"36": 0.045,"48": 0.045},
      link: "https://www.bancaifis.it/rendimax-calcola-rendimento",
      liquidazione: "anticipata all'attivazione se si sceglie 'Vincolato anticipato' oppure trimestrale posticipata se si sceglie 'Vincolato posticipato'",
      costi_extra: "nessun costo di apertura o chiusura",
      importo_minimo: 1000
    
    },
    {
      bank: 'Banca Ifis',
      product: 'like',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Nuovo_Logo_Banca_Ifis.jpg',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.0125, "12": 0.0125,"18": 0.0125,"24": 0.0125,"36": 0.0125,"48": 0.0125},
      link: "https://www.bancaifis.it/rendimax-calcola-rendimento",
      liquidazione: "trimestrale",
      costi_extra: "nessun costo di apertura o chiusura",
      importo_minimo: 1000
    
    },
    {
      bank: 'Cherry Bank',
      product: 'Cherry vincolato',
      image: 'https://www.cherrybank.it/wp-content/uploads/2022/03/cherryBank.jpg',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.045, "12": 0.05,"18": 0.05,"24": 0.05,"36": 0.054,"48": 0.054},
      link: "https://www.cherrybank.it/privati-e-famiglie/conto-deposito/",
      liquidazione: "trimestrale",
      costi_extra: "nessun costo di apertura o chiusura"
    
    },
    {
      bank: 'Cherry Bank',
      product: 'Cherry box',
      image: 'https://www.cherrybank.it/wp-content/uploads/2022/03/cherryBank.jpg',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.01, "12": 0.01,"18": 0.01,"24": 0.01,"36": 0.01,"48": 0.01},
      link: "https://www.cherrybank.it/privati-e-famiglie/conto-deposito/",
      liquidazione: "trimestrale",
      costi_extra: "nessun costo di apertura o chiusura"
    
    },
  ];

  module.exports = bankingProducts
  