import React from 'react';
import yapikredi from '../assets/yapikredi_beyaz.png';

const Sponsors = () => {
  return (
    // 100dvh !!!
    <section id='3' className='text-center h-[100dvh] pt-44'>
      <h2 className='text-3xl sm:text-6xl lg:text-8xl font-semibold'>
        Sponsorlar
      </h2>
      <h3 className='mt-24 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Ana Sponsor
      </h3>
      <div className='flex justify-center '>
        <img
          className='w-2/3 md:w-1/2 md:mr-12'
          src={yapikredi}
          alt='Yapı Kredi'
        />
      </div>

      <h3 className='mt-8 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Gümüş Sponsor
      </h3>
      <h3 className='mt-8 text-xl sm:text-3xl lg:text-4xl font-extralight'>
        Platin Sponsor
      </h3>
    </section>
  );
};

export default Sponsors;
