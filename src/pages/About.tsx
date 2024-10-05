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
    {
      title: 'Customizable Mining Plans',
      description: 'Tailor your mining plan to your specific needs and budget, ensuring you receive the best value for your money.',
    },
    {
      title:'24/7 Monitoring and Full Control – Manage Your Mining Anytime, Anywhere',
      description:'Take control of your mining operations with our intuitive dashboard. Monitor your performance, earnings, and settings from any device, at any time.'
    },
    {
      title:'Secure and Reliable: Your Investment, Our Priority',
      description:'We utilize advanced security protocols to safeguard your investments and ensure your data remains confidential. Trust in our commitment to keeping your mining operations safe and sound.'
    },
    {
      title:'No Setup Required – Start Mining Immediately',
      description:'We handle all the technical details, allowing you to focus on maximizing your earnings without the stress of hardware installation.'
    }

    // Add more cards as needed
  ];
  return (
    <div className='bg-slate-200 min-h-screen mt-0'>

    <div className='flex pt-2 justify-center'>
      <img src={image} alt=" money"  className='blur-sm'/>
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