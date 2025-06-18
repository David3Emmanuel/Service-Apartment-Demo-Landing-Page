import RotatingBackground from './RotatingBackground'

export default function Hero() {
  const heroImages = ['/hero-image_1.png', '/hero-image_2.png']

  return (
    <section className='relative w-full h-[75vh] md:h-screen overflow-hidden'>
      {/* Background Images with transition */}
      <RotatingBackground
        imageUrls={heroImages}
        interval={5000}
        overlay={true}
        overlayColor='black'
        overlayOpacity={0.3}
      />
      {/* Hero Content */}
      <div className='relative z-10 w-full h-full flex flex-col items-center'>
        {/* Main hero text - centered both horizontally and vertically */}
        <div className='flex-grow flex items-center justify-center'>
          <div className='max-w-[813px] px-6 flex flex-col items-center text-center'>
            <h1 className='font-afacad text-[40px] md:text-[64px] text-white mb-4 leading-[1.2]'>
              <span className='font-medium'>Your Home </span>
              <span>Away </span>
              <span className='font-medium'>From Home</span>
            </h1>
            <p className='text-white font-afacad text-base md:text-lg mb-8 max-w-2xl'>
              Experience comfort, and true relaxation in our thoughtfully
              designed service apartments
            </p>
            <button className='bg-white text-[#1E1E1E] font-afacad px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md'>
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
