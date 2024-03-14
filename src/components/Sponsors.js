import React from 'react';
import yapikredi from '../assets/yapikredi.png';
import lcw from '../assets/lcw.png';
import malwation from '../assets/malwation.png';
import yovimetro from '../assets/yovimetro.png';

const Sponsors = () => {
  return (
    // 100dvh !!!
    <section id='3' className='text-center pt-44'>
      <h2 className='text-3xl sm:text-6xl lg:text-8xl font-semibold'>
        Sponsorlar
      </h2>
      <h3 className='mt-24 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Ana Sponsor
      </h3>
      <div className='flex justify-center'>
        <div className='w-2/3 md:w-1/2 md:mr-12 px-8 mt-2 p-2 radial'>
          <img src={yapikredi} alt='Yapı Kredi' />
        </div>
      </div>

      <h3 className='mt-8 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Altın Sponsor
      </h3>
      <div className='flex justify-center '>
        <div className='w-2/3 md:w-1/2 px-8 py-12 mt-2 radial'>
          <img src={lcw} alt='LC Waikiki' />
        </div>
      </div>

      <h3 className='mt-8 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Gümüş Sponsor
      </h3>
      <div className='flex justify-center '>
        <div className='w-2/3 md:w-1/2 px-8 py-12 mt-2 radial'>
          <img src={malwation} alt='Malwation' />
        </div>
      </div>

      <h3 className='mt-8 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Medya Sponsorları
      </h3>
      <div className='flex justify-center '>
        <div className='w-2/3 md:w-1/2 px-8 py-12 mt-2 h-48 md:h-64 radial flex justify-center'>
          <img className='' src={yovimetro} alt='Yovi Metro' />
        </div>
      </div>

      {/* <h3 className='mt-8 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Platin Sponsor
      </h3> */}
    </section>
  );
};

export default Sponsors;
