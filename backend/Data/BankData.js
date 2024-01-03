const bankingProducts = [
  
  
    {
      bank: 'Illimity',
      product: 'basic vincolato',
      image: '/Loghibanche/Illimity.png',
      description:"basic",
      vincolato:"si",
      tasso:{"6": 0.013, "12": 0.0325,"18": 0.035,"24": 0.04,"36": 0.05,"48": 0.05,"60": 0.05},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf",
      liquidazione: "A fine vincolo dai 6 ai 18 mesi. Annuale posticipata da 2 a 5 anni",
      costi_extra: "nessun costo di apertura o chiusura, c'è solo il costo dell'imposta di bollo dello 0,20% annuo sulle somme depositate",
      note: "Fondata nel 2018, Illimity Bank è un'istituzione bancaria relativamente nuova che si sta rapidamente affermando per le sue soluzioni innovative di banking digitale e un forte focus sulla sicurezza."
    
    },
    {
      bank: 'Illimity',
      product: 'basic svincolato',
      image: '/Loghibanche/Illimity.png',
      description:"basic",
      vincolato:"no",
      tasso:{"6": 0.008, "12": 0.0225,"18": 0.025,"24": 0.0325,"36": 0.0420,"48": 0.0420,"60": 0.0420},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf",
      liquidazione: "a fine vincolo",
      costi_extra: "nessun costo di apertura o chiusura, c'è solo il costo dell'imposta di bollo dello 0,20% annuo sulle somme depositate",
      note: "Fondata nel 2018, Illimity Bank è un'istituzione bancaria relativamente nuova che si sta rapidamente affermando per le sue soluzioni innovative di banking digitale e un forte focus sulla sicurezza."
    

    },
    {
      bank: 'Illimity',
      product: 'premium vincolato',
      image: '/Loghibanche/Illimity.png',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.015, "12": 0.0350,"18": 0.0375,"24": 0.0450,"36": 0.0575,"48": 0.0575,"60": 0.0575},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf",
      liquidazione: "A fine vincolo dai 6 ai 18 mesi. Annuale posticipata da 2 a 5 anni",
      costi_extra: "nessun costo di apertura o chiusura, c'è solo il costo dell'imposta di bollo dello 0,20% annuo sulle somme depositate",
      note: "Fondata nel 2018, Illimity Bank è un'istituzione bancaria relativamente nuova che si sta rapidamente affermando per le sue soluzioni innovative di banking digitale e un forte focus sulla sicurezza."
    

    
    },
    {
      bank: 'Illimity',
      product: 'premium svincolato',
      image: '/Loghibanche/Illimity.png',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.01, "12": 0.0250,"18": 0.0275,"24": 0.0350,"36": 0.050,"48": 0.050,"60": 0.050},
      link: "https://www.illimitybank.com/it/conto-deposito?utmcodes=SEARCH23&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC2pQsFwyhNS_S6F8Uh667_m7ORVnPAjAvXzIN1CqgSMq2kltQ_b7DhoCB1AQAvD_BwE&gclsrc=aw.ds",
      foglietto: "https://a.storyblok.com/f/186519/x/39f9fb197c/foglio-informativo-conto-deposito-illimity_19-12-2023.pdf",
      liquidazione: "a fine vincolo",
      costi_extra: "nessun costo di apertura o chiusura, c'è solo il costo dell'imposta di bollo dello 0,20% annuo sulle somme depositate",
      note: "Fondata nel 2018, Illimity Bank è un'istituzione bancaria relativamente nuova che si sta rapidamente affermando per le sue soluzioni innovative di banking digitale e un forte focus sulla sicurezza."
    

    
    },
    {
      bank: 'Tinaba',
      product: 'start svincolabile',
      image: '/Loghibanche/Tinaba.png',
      description:"start",
      vincolato:"no",
      tasso:{"6": 0.018, "12": 0.020,"18": 0.025,"24": 0.0250,"36": 0.0250,"48": 0.0250},
      link: "https://bancaprofilo.tinaba.it/conto-deposito",
      liquidazione: "annuale",
      costi_extra: "nessun costo di apertura e chiusura, l'imposta di bollo è a carico della banca",
      note: "Stabilita nel 2016, Tinaba si distingue per il suo approccio moderno e servizi digitali intuitivi. È orientata verso una clientela giovane e tecnologica. La sede centrale è a Milano."
    
    
    },
    {
      bank: 'Tinaba',
      product: 'premium svincolabile',
      image: '/Loghibanche/Tinaba.png',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.035, "12": 0.040,"18": 0.045,"24": 0.04,"36": 0.04,"48": 0.04},
      link: "https://bancaprofilo.tinaba.it/conto-deposito",
      liquidazione: "annuale",
      costi_extra: "nessun costo di apertura e chiusura, l'imposta di bollo è a carico della banca",
      note: "Stabilita nel 2016, Tinaba si distingue per il suo approccio moderno e servizi digitali intuitivi. È orientata verso una clientela giovane e tecnologica. La sede centrale è a Milano."
    
    },
    {
      bank: 'Aixeda',
      product: 'Banca Aixeda X risparmio vincolato',
      image: '/Loghibanche/Aixeda.png',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.05, "12": 0.05,"18": 0.055,"24": 0.055,"36": 0.05,"48": "n.a."},
      link: "https://hb.aidexa.it/onboarding/fe/03625/aidexa/#/step/1",
      liquidazione: "a scadenza del vincolo",
      costi_extra: "nessun costo di apertura o chiusura, c'è solo il costo dell'imposta di bollo dello 0,20% annuo sulle somme depositate",
      note: "Aixeda, con una fondazione recente, si è rapidamente guadagnata una reputazione per i suoi servizi bancari incentrati sul cliente e per l'affidabilità, in particolare nelle soluzioni di banking digitale."
    
    },
    {
      bank: 'Aixeda',
      product: 'Banca Aixeda X risparmio libero',
      image: '/Loghibanche/Aixeda.png',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.04, "12": 0.04,"18": 0.04,"24": 0.04,"36": 0.04,"48": 0.04},
      link: "https://hb.aidexa.it/onboarding/fe/03625/aidexa/#/step/1",
      liquidazione: "trimestrale",
      costi_extra: "nessun costo di apertura o chiusura, c'è solo il costo dell'imposta di bollo dello 0,20% annuo sulle somme depositate",
      note: "Aixeda, con una fondazione recente, si è rapidamente guadagnata una reputazione per i suoi servizi bancari incentrati sul cliente e per l'affidabilità, in particolare nelle soluzioni di banking digitale."
    
    },
    {
      bank: 'Vivibanca',
      product: 'Viviconto extra',
      image: '/Loghibanche/Vivibanca.png',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.0425, "12": 0.05,"18": 0.0525,"24": 0.055,"36": 0.05,"48": "n.a."},
      link: "https://vivibanca.it/conto-deposito-viviconto",
      liquidazione: "alla scadenza del vincolo di deposito insieme al rimborso del capitale",
      costi_extra: "",
      note: "Vivibanca, con anni di esperienza nel settore, è conosciuta per la sua affidabilità e l'attenzione alla sicurezza del cliente. La banca ha la sua sede centrale in Italia, specificatamente a Torino."
    
    },
    {
      bank: 'Banca Ifis',
      product: 'vincolato',
      image: '/Loghibanche/BancaIfis.png',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.0375, "12": 0.04,"18": 0.0425,"24": 0.050,"36": 0.045,"48": 0.045},
      link: "https://www.bancaifis.it/rendimax-calcola-rendimento",
      liquidazione: "anticipata all'attivazione se si sceglie 'Vincolato anticipato' oppure trimestrale posticipata se si sceglie 'Vincolato posticipato'",
      costi_extra: "nessun costo di apertura o chiusura",
      importo_minimo: 1000,
      note: "Fondata nel 1983, Banca Ifis è un'istituzione finanziaria solida e affidabile, specializzata in servizi di conto deposito. La sede principale si trova a Venezia."
    
    },
    {
      bank: 'Banca Ifis',
      product: 'like',
      image: '/Loghibanche/BancaIfis.png',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.0125, "12": 0.0125,"18": 0.0125,"24": 0.0125,"36": 0.0125,"48": 0.0125},
      link: "https://www.bancaifis.it/rendimax-calcola-rendimento",
      liquidazione: "trimestrale",
      costi_extra: "nessun costo di apertura o chiusura",
      importo_minimo: 1000,
      note: "Fondata nel 1983, Banca Ifis è un'istituzione finanziaria solida e affidabile, specializzata in servizi di conto deposito. La sede principale si trova a Venezia."
    
    },
    {
      bank: 'Cherry Bank',
      product: 'Cherry vincolato',
      image: '/Loghibanche/Cherrybank.png',
      description:"premium",
      vincolato:"si",
      tasso:{"6": 0.045, "12": 0.05,"18": 0.05,"24": 0.05,"36": 0.054,"48": 0.054},
      link: "https://www.cherrybank.it/privati-e-famiglie/conto-deposito/",
      liquidazione: "trimestrale",
      costi_extra: "nessun costo di apertura o chiusura",
      note: "Cherrybank, entrata di recente nel mondo bancario, si è fatta notare per l'innovazione e l'affidabilità nei servizi finanziari digitali. La sede di questa banca è in Italia"
    
    },
    {
      bank: 'Cherry Bank',
      product: 'Cherry box',
      image: '/Loghibanche/Cherrybank.png',
      description:"premium",
      vincolato:"no",
      tasso:{"6": 0.01, "12": 0.01,"18": 0.01,"24": 0.01,"36": 0.01,"48": 0.01},
      link: "https://www.cherrybank.it/privati-e-famiglie/conto-deposito/",
      liquidazione: "trimestrale",
      costi_extra: "nessun costo di apertura o chiusura",
      note: "Cherrybank, entrata di recente nel mondo bancario, si è fatta notare per l'innovazione e l'affidabilità nei servizi finanziari digitali. La sede di questa banca è in Italia"
    
    },
  ];

  module.exports = bankingProducts
  