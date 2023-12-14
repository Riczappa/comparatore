import React from 'react';

function AccountTypesInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center text-center my-8">
      <div className="md:w-1/2 p-4 m-2 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg mb-2">Conti a Tasso Vincolato</h2>
        <p>Blocca il tuo denaro per un periodo fisso e ottieni tassi d'interesse più alti. Perfetto se non hai bisogno di accesso immediato ai tuoi fondi.</p>
      </div>

      <div className="md:w-1/2 p-4 m-2 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg mb-2">Conti a Tasso Libero</h2>
        <p>Flessibilità e libertà! Ritira i tuoi soldi quando vuoi, ideale per chi desidera sicurezza e accesso immediato ai propri risparmi, con tassi di interesse standard.</p>
      </div>
    </div>
  );
}

export default AccountTypesInfo;
