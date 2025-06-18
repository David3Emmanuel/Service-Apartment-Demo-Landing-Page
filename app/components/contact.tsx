export default function Contact() {
  return (
    <section className='py-16 px-0 sm:px-6 md:py-24 lg:py-24 lg:px-16 xl:px-20 w-full bg-white'>
      <div
        className='w-full rounded-3xl bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center justify-center min-h-[350px]'
        style={{ backgroundImage: "url('/contact-bg.png')" }}
      >
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='h-full w-full relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 lg:p-20'>
          <div className='max-w-xl mx-auto flex flex-col items-center gap-6 md:gap-10'>
            <div className='flex flex-col items-center'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-afacad'>
                Get in Touch With Us
              </h2>
              <p className='text-base sm:text-xl md:text-2xl font-semibold text-white mt-2 font-afacad'>
                Speak with our friendly team to book your stay in lagos
              </p>
            </div>

            <a
              href='tel:+2348033443308'
              className='bg-white rounded-xl py-3 px-6 flex items-center gap-4 hover:bg-gray-100 transition-colors'
            >
              <img src='/phone.svg' alt='Phone Icon' className='w-6 h-6' />
              <span className="text-base md:text-lg xl:text-xl font-medium text-[#1E1E1E] font-['Plus_Jakarta_Sans',sans-serif]">
                Call +2348033443308
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
