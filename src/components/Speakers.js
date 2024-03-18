import React from 'react';
import logo from '../assets/skylab_logo.webp';
import eren from '../assets/eren.png';
import berk from '../assets/berk.png';
import ali from '../assets/ali.png';
import halil from '../assets/halil.jpg';

const Speakers = () => {
  return (
    <section
      id='2'
      className='h-[100dvh] flex flex-col justify-center pt-28 sm:pt-36 lg:pt-44 snap-start'
    >
      <h1 className='text-center text-3xl sm:text-6xl lg:text-8xl font-semibold'>
        Konuşmacılar
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-16 mt-6 sm:mt-10 lg:mt-16 px-2 sm:px-12 lg:px-40'>
        <div className='flex flex-col justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-32 md:h-44 aspect-square'>
            <img className='scale-110' src={eren} alt='eren törümküney' />
          </div>
          <h2 className='sm:text-2xl text-nowrap'>Eren Törümküney</h2>
          <h3 className='text-xs sm:text-base text-nowrap'>
            Yapı Kredi Teknolojileri
          </h3>
          <h3 className='text-xs sm:text-base text-nowrap'>
            Platform Güvenliği Müdürü
          </h3>
          <h4 className='text-xs sm:text-base text-nowrap mt-2'>
            “Finans Sektöründe Siber Güvenlik”
          </h4>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-32 md:h-44 aspect-square'>
            <img className='scale-[1.40]' src={berk} alt='berk albayrak' />
          </div>
          <h2 className='sm:text-2xl text-nowrap'>Berk Albayrak</h2>
          <h3 className='text-xs sm:text-base text-nowrap'>Malwation</h3>
          <h3 className='text-xs sm:text-base text-nowrap'>
            Threat Research Team Lead
          </h3>
          <h4 className='text-xs sm:text-base text-nowrap mt-2'>
            “Siber tehditleri anlamak”
          </h4>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-32 md:h-44 aspect-square'>
            <img className='scale-[1.40]' src={ali} alt='ali tütüncü' />
          </div>
          <h2 className='sm:text-2xl text-nowrap'>Ali Tütüncü</h2>
          <h3 className='text-xs sm:text-base text-nowrap'></h3>
          <h3 className='text-xs sm:text-base text-nowrap'>
            Independent Security Researcher
          </h3>
          <h4 className='text-xs sm:text-base text-center mt-2'>
            “Ödül Avcılığı: Bug Bounty'nin Temel Prensipleri ve İşleyişi”
          </h4>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-32 md:h-44 aspect-square'>
            <img
              className='scale-[1.40]'
              src={halil}
              alt='halil ibrahim yaşarsoy'
            />
          </div>
          <h2 className='sm:text-2xl text-nowrap'>Halil İbrahim Yaşarsoy</h2>
          <h3 className='text-xs sm:text-base text-nowrap'>Confidenya</h3>
          <h3 className='text-xs sm:text-base text-nowrap'>
            Cyber Security Team Lead
          </h3>
          <h4 className='text-xs sm:text-base text-center mt-2 text-nowrap'>
            “Siber Güvenlik Alanında Kariyer”
          </h4>
        </div>
        <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-32 md:h-44 aspect-square'>
            <img src={logo} alt='speaker' />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-32 md:h-44 aspect-square'>
            <img src={logo} alt='speaker' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
