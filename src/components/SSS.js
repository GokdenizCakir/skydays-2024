import React, { useState } from 'react';
import { data } from '../utils/sss-data';
import Accordion from './Accordion';

const SSS = () => {
  const [currentChoice, setCurrentChoice] = useState(null);

  return (
    <section id='5' className='pt-32 md:pt-40 flex flex-col items-center'>
      <h1 className='mb-12 text-3xl sm:text-6xl  font-semibold'>
        Sıkça Sorulan Sorular
      </h1>

      {data.map((item, index) => (
        <Accordion
          key={index}
          item={item}
          currentChoice={currentChoice}
          setCurrentChoice={setCurrentChoice}
        />
      ))}

      <h2 className='mt-20 text-xl sm:text-2xl text-center'>
        Soracak başka sorularınız için{' '}
        <a
          href='mailto:skylab.ytu@gmail.com'
          className='text-[#8498ff] cursor-pointer'
        >
          skylab.ytu@gmail.com
        </a>{' '}
        mail adresine ulaşabilirsiniz.
      </h2>
    </section>
  );
};

export default SSS;
