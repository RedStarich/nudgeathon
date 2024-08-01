import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/growth.png)' }}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10">
          <h2 className="text-3xl font-bold mb-4 text-amber-400">О Бастау Инвест</h2>
          <p className="mb-4 text-white">
            Бастау инвест – это инновационная платформа, созданная для поддержки начинающих инвесторов. Мы предоставляем полную информацию о вашем портфолио, включая анализ транзакций, текущую стоимость активов, обучающие материалы и многое другое. Наша цель – сделать вашу финансовую жизнь проще и продуктивнее.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default AboutSection;
