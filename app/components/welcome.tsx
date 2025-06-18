export default function Welcome() {
  return (
    <section className='relative w-full h-[75vh] md:h-screen overflow-hidden welcome-gradient py-20 lg:py-32'>
      {/* Left Image */}
      <div className='hidden lg:block absolute -left-[40px] top-[80px]'>
        <img
          src='/welcome-image_1.png'
          alt='Luxury apartment exterior'
          className='w-[180px] h-[170px] rounded-[40px] object-cover'
        />
      </div>
      {/* Right Image */}
      <div className='hidden lg:block absolute -right-[40px] bottom-[80px]'>
        <img
          src='/welcome-image_2.png'
          alt='Modern apartment entrance'
          className='w-[180px] h-[170px] rounded-[40px] object-cover'
        />
      </div>
      {/* Content Container */}
      <div className='container relative mx-auto px-4 py-16 flex flex-col items-center max-w-4xl'>
        {/* Text Content */}
        <div className='flex flex-col items-center gap-6 text-center z-10'>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[120%] font-['Afacad',sans-serif] text-black max-w-3xl">
            {/* Star Icon */}
            <div className='inline-block relative mb-4 mr-4 w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] z-10'>
              <img
                src='/welcome-star.svg'
                alt=''
                className='w-full h-full cursor-pointer star-animation transition-transform duration-300 ease-out hover:scale-125 hover:ease-[cubic-bezier(0.34,1.56,0.64,1)]'
              />
            </div>
            Welcome to Your Serene Escape
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1E1E1E] font-['Afacad',sans-serif] max-w-xl md:max-w-2xl">
            <span className="font-['Aladin',cursive]">Premkonsult</span> offer
            service apartments designed for your rest and relaxation, complete
            with cleaning, laundry, and fumigation services. Enjoy 24/7
            electricity and convenient transportation services for a truly
            effortless stay.
          </p>
        </div>
      </div>
    </section>
  )
}
