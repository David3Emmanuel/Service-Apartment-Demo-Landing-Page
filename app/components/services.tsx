import { useState, useEffect } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simple animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='relative w-full py-16 md:py-24 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <h2
          className={`text-center text-[#1E1E1E] text-4xl md:text-5xl lg:text-6xl font-medium font-afacad mb-10 md:mb-16 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Services We Offer
        </h2>

        <div className='flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch max-w-6xl mx-auto'>
          {/* Relaxation Suite Card */}
          <div
            className={`flex-1 flex flex-col border-2 border-[rgba(245,157,60,0.34)] rounded-[20px] p-6 shadow-sm transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='mb-8 md:mb-10'>
              <h3 className='text-2xl md:text-3xl font-medium text-black font-afacad'>
                Relaxation suite
              </h3>
              <p className='text-lg md:text-xl text-[#AEAEAE] font-afacad'>
                Enjoy a cozy spot to unwind and feel refreshed.
              </p>
            </div>

            <div className='flex gap-5'>
              <div className='flex flex-col gap-4 md:gap-5'>
                <CheckIcon />
                <CheckIcon />
                <CheckIcon />
                <CheckIcon />
                <CheckIcon />
              </div>
              <div className='flex flex-col gap-4 md:gap-5'>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  24/7 Electricity
                </p>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  Premium Comfort
                </p>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  Adequate Security
                </p>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  Regular Cleaning
                </p>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  Running Water
                </p>
              </div>
            </div>
          </div>

          {/* Extra Offers Card */}
          <div
            className={`flex-1 flex flex-col border-2 border-[rgba(245,157,60,0.34)] rounded-[20px] p-6 shadow-sm transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='mb-8 md:mb-10'>
              <h3 className='text-2xl md:text-3xl font-medium text-black font-afacad'>
                Extra Offers
              </h3>
              <p className='text-lg md:text-xl text-[#AEAEAE] font-afacad'>
                Premium services for our clients.
              </p>
            </div>

            <div className='flex gap-5'>
              <div className='flex flex-col gap-4 md:gap-5'>
                <CheckIcon />
                <CheckIcon />
                <CheckIcon />
              </div>
              <div className='flex flex-col gap-4 md:gap-5'>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  Transportation
                </p>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  Fumigation
                </p>
                <p className='text-lg md:text-xl text-[#1E1E1E] font-afacad'>
                  Laundry
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Stars */}
        <div className='absolute right-8 top-40 hidden md:block'>
          <div className='star-animation'>
            <StarIcon color='rgba(114, 136, 162, 0.28)' />
          </div>
        </div>
        <div className='absolute left-8 bottom-10 hidden md:block'>
          <div className='star-animation'>
            <StarIcon color='rgba(245, 157, 60, 0.18)' />
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper Components
const CheckIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.059 8.833 19 7'
      stroke='black'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const StarIcon = ({ color = '#7288A2' }) => (
  <svg
    width='73'
    height='73'
    viewBox='0 0 76 76'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='filter drop-shadow-md'
  >
    <path
      d='M23.7027 0.604953L43.4658 21.2602L72.0104 19.7027L51.3552 39.4658L52.9127 68.0104L33.1496 47.3551L4.60501 48.9127L25.2603 29.1496L23.7027 0.604953Z'
      fill={color}
    />
  </svg>
)
