import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#1e5245] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 pb-4 text-center border-b border-[#2e8b57] inline-block mx-auto">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto bg-[#2a6354]/70 rounded-lg p-8 md:p-10 shadow-lg">
          <ul className="space-y-6 list-disc pl-6 text-white/90">
            <li className="text-lg">
              I'm a stock market trader who comes from an engineering background. Like most beginners, I went through the usual path—mentors, trading books, weekend courses. But after all that, one truth stood out:
            </li>
            
            <li className="text-lg">
              Trading can't be taught. It's a skill that takes time, experience, and self-awareness to develop.
            </li>
            
            <li className="text-lg">
              I'm also a huge cricket fan. And every time legends like SACHIN TENDULKAR, RAHUL DRAVID AND VIRAT KOHLI talk about game awareness, they echo something simple: Keep it simple. Enjoy the game.
            </li>
            
            <li className="text-lg">
              That, to me, is the core of trading.
            </li>
            
            <li className="text-lg">
              You don't need complicated setups or secret indicators.
              You need clarity, discipline, and the ability to stay grounded.
            </li>
            
            <li className="text-lg">
              I still remember my first trade—hands trembling as I hit 'buy', heart racing as I watched the P&L tick up and down.
              Everyone goes through that stage...
            </li>
            
            <li className="text-lg">
              This website is my space.
              To document my trades, share what I've learned, and hopefully help traders who are tired of the noise, the hype, and the "get-rich" nonsense.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;