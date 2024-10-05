import React from 'react'
import Card from '../components/Card';
import image from '../assets/money.jpeg'
import image2 from '../assets/tech_hardware.jpeg'
import image3 from '../assets/crypto_minig.jpeg'
import image4 from '../assets/monitoring.jpeg'
import image5 from '../assets/mining_plan.jpeg'
import image6 from '../assets/Data Security.jpeg'
import image7 from '../assets/mining_setup.jpeg'
import image8 from '../assets/Digital Gold Rush.jpeg'

const About = () => {
  const cardsData = [
    {
      image:image7,
      title:'No Setup Required – Start Mining Immediately',
      description:'We handle all the technical details, allowing you to focus on maximizing your earnings without the stress of hardware installation.'
    },
    {
      image:image3,
      side:'left',
      title: 'Advanced Cloud Mining Solutions',
      description: 'Harness the power of cloud mining with no upfront costs or long-term commitments.',
    },
    {
      image:image5,
      side:'right',
      title: 'Customizable Mining Plans',
      description: 'Tailor your mining plan to your specific needs and budget, ensuring you receive the best value for your money.',
    },
    {
      image:image4,
      side:'left',
      title: '24/7 Mining Efficiency Monitoring',
      description: 'Our advanced systems ensure optimal performance round the clock, maximizing your mining output.',
    },
    {
      image:image2,
      side:'right',
      title: 'Access the Latest Mining Technology Without Buying Expensive Hardware',
      description: 'No need to invest in costly equipment—our rental service allows you to access the latest mining hardware and software without the financial burden.',
    },
    {
      image:image6,
      side:'left',
      title:'Secure and Reliable: Your Investment, Our Priority',
      description:'We utilize advanced security protocols to safeguard your investments and ensure your data remains confidential. Trust in our commitment to keeping your mining operations safe and sound.'
    },

    // Add more cards as needed
  ];
  return (
    <div className='bg-slate-200 min-h-screen mt-0 p-3 '>

      <div>

      <h3 className='font-bold text-center text-[2.1rem]'>About our company</h3>

    <div className='flex flex-wrap justify-center'>

      <Card
      image={image}
      side='left'
      title=' Welcome to Our Crypto Mining Services'
      description=' Based in Johannesburg, South Africa, we specialize in high-performance crypto mining servers tailored to your needs. 
      Hire a server that fits your capability and start mining. Invest wisely, and reap the rewards: with our service, you pay for 
      what you use, and enjoy the benefits of owning your mining account.'
       />
        <Card
      image={image8}
      side='right'
      title=' Experience the Future of Crypto Mining with Peer Mining'
      description='At Peer Mining, we are dedicated to providing our clients with state-of-the-art mining technology and unparalleled support. 
      Our team of experts is here to guide you through the process, ensuring that you maximize your mining potential. 
      Join us in harnessing the power of blockchain technology, and unlock the rewards of crypto mining today!'
      />
      </div>
      </div>
      {/* Image Section */}
      {/* <div className='flex pt-2 justify-center'>
        <img src={image} alt="money" className='blur-0' />
      </div> */}
  
      {/* Why Choose Us Section */}
      <div className=''>
        <h3 className='text-center font-bold m-2 text-[20px]'>Why Choose Us</h3>
        <div className="flex flex-wrap justify-center">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              side={card.side}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default About