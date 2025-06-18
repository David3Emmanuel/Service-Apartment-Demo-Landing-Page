import { Link } from 'react-router'
import { useHeader } from '~/hooks/useHeader'

export default function Header() {
  const { isMenuOpen, toggleMenu } = useHeader()

  return (
    <header className='fixed w-full top-0 z-50 lg:px-16 lg:pt-4'>
      <div className='flex h-[76px] w-full justify-between items-center px-4 md:px-16 lg:rounded-2xl bg-white/16 backdrop-blur-xs'>
        {/* Logo */}
        <div className='text-white font-aladin text-base'>Premkonsult</div>

        {/* Mobile menu button */}
        <button
          className='sm:hidden text-white p-2'
          onClick={toggleMenu}
          aria-label='Toggle navigation menu'
        >
          {isMenuOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='4' y1='12' x2='20' y2='12'></line>
              <line x1='4' y1='6' x2='20' y2='6'></line>
              <line x1='4' y1='18' x2='20' y2='18'></line>
            </svg>
          )}
        </button>

        {/* Navigation - Desktop */}
        <div className='hidden sm:flex items-center gap-10 lg:gap-[60px]'>
          <Link to='/' className='text-black font-afacad text-xl font-medium'>
            Home
          </Link>
          <Link to='/about' className='text-[#AEAEAE] font-afacad text-xl'>
            About Us
          </Link>
          <Link to='/services' className='text-[#AEAEAE] font-afacad text-xl'>
            Services
          </Link>
          <Link to='/contact' className='text-[#AEAEAE] font-afacad text-xl'>
            Contact Us
          </Link>
        </div>

        {/* Navigation - Mobile */}
        {isMenuOpen && (
          <div className='absolute top-[76px] left-0 right-0 bg-white/95 backdrop-blur-sm sm:hidden p-4 shadow-md'>
            <div className='flex flex-col gap-4'>
              <Link
                to='/'
                className='text-black font-afacad text-xl font-medium py-2'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='text-[#AEAEAE] font-afacad text-xl py-2'
              >
                About Us
              </Link>
              <Link
                to='/services'
                className='text-[#AEAEAE] font-afacad text-xl py-2'
              >
                Services
              </Link>
              <Link
                to='/contact'
                className='text-[#AEAEAE] font-afacad text-xl py-2'
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

        {/* Get in touch button */}
        <div className='hidden sm:block'>
          <Link
            to='/contact'
            className='flex h-11 px-[18px] py-[14px] justify-center items-center gap-2 rounded-lg bg-white'
          >
            <span className='text-[#1E1E1E] font-afacad text-base leading-[140%] tracking-[0.32px]'>
              Get in touch
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
