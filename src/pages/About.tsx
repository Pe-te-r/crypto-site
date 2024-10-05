import React from 'react'
import image from '../assets/money.jpeg'
import Card from '../components/Card';

const About = () => {
  const cardsData = [
    {
      title: 'Access the Latest Mining Technology Without Buying Expensive Hardware',
      description: 'No need to invest in costly equipment—our rental service allows you to access the latest mining hardware and software without the financial burden.',
    },
    {
      title: 'Advanced Cloud Mining Solutions',
      description: 'Harness the power of cloud mining with no upfront costs or long-term commitments.',
    },
    {
      title: '24/7 Mining Efficiency Monitoring',
      description: 'Our advanced systems ensure optimal performance round the clock, maximizing your mining output.',
    },
    // Add more cards as needed
  ];
  return (
    <div className='bg-[#E1F74D] min-h-screen'>

    <div 
    // className='w-full h-1/2 blur-sm relative lg:w-3/4 ' 
    // style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <a href={image}></a>
    </div>
    <div className=''>
      <h3 className='text-center font-bold m-2 text-[20px]'>Why choose us</h3>
      <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default About