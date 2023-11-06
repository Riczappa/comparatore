import React from 'react'

function Card() {

    const data=[    {
        image: 'https://example.com/image1.jpg',
        bank: 'Bank 1',
        product: 'Product 1',
        description: 'Description for product 1...',
        // ... other details ...
      },
      {
        image: 'https://example.com/image2.jpg',
        bank: 'Bank 2',
        product: 'Product 2',
        description: 'Description for product 2...',
        // ... other details ...
      },
      // ... more items ...
    ];
    
  return (
    <div>
         <div className="grid grid-cols-1 gap-4 m-5">
          {data.map((item, index) => (
            <div className="bg-white p-6 rounded-lg shadow-lg mx-auto md:w-[600px] w-full" key={index}>
              <img src={item.image} alt={item.bank} className="w-full object-cover object-center rounded-lg" />
              <h5 className="mt-4 text-xl font-semibold">{item.product}</h5>
              <p className="text-gray-700 mt-2">{item.description}</p>
             
              <button className="mt-4 md:mt-0 md:ml-4 md:mr-4    w-full bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Card