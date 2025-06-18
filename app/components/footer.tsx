import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-start gap-8 p-6 sm:p-8 md:p-6 lg:px-12 lg:py-8 bg-white w-full border-t border-gray-100'>
      {/* Left side: Logo and Social Media */}
      <div className='flex flex-col items-start gap-6 md:gap-12 lg:gap-16 w-full md:w-auto'>
        <div className='font-aladin text-black text-lg'>Premkonsult</div>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='font-jakarta text-black text-sm sm:text-base font-medium mr-1'>
            Us on social media
          </span>
          <div className='flex items-center gap-2'>
            <Link
              to='https://www.instagram.com/'
              aria-label='Instagram'
              className='hover:opacity-80 transition-opacity'
            >
              <img
                src='/instagram.svg'
                alt='Instagram'
                width={24}
                height={24}
              />
            </Link>
            <Link
              to='https://www.facebook.com/'
              aria-label='Facebook'
              className='hover:opacity-80 transition-opacity'
            >
              <img src='/facebook.svg' alt='Facebook' width={24} height={24} />
            </Link>
            <Link
              to='https://www.youtube.com/'
              aria-label='YouTube'
              className='hover:opacity-80 transition-opacity'
            >
              <img src='/youtube.svg' alt='YouTube' width={25} height={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Contact Information */}
      <div className='flex flex-col items-start gap-4 w-full md:w-auto max-w-full md:max-w-[375px]'>
        {/* Phone */}
        <div className='flex flex-wrap items-start sm:items-center gap-2'>
          <img
            src='/phone.svg'
            alt='Phone'
            width={16}
            height={16}
            className='w-4 h-4 mt-1 sm:mt-0'
          />
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
            <a
              href='tel:+2348033443308'
              className='font-afacad text-black text-sm sm:text-base hover:underline'
            >
              + 234 8033443308
            </a>
            <a
              href='tel:+2348058528535'
              className='font-afacad text-black text-sm sm:text-base hover:underline'
            >
              + 234 8058528535
            </a>
          </div>
        </div>

        {/* Email */}
        <div className='flex items-center gap-2'>
          <svg
            width='14'
            height='13'
            viewBox='0 0 14 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-3 h-3'
          >
            <path
              d='M8.04638 1.43057L12.5632 4.2465C12.7228 4.346 12.8026 4.39575 12.8604 4.46211C12.9116 4.52086 12.95 4.5888 12.9735 4.66198C13 4.74464 13 4.83593 13 5.0185V9.23772C13 10.2046 13 10.6881 12.8038 11.0574C12.6312 11.3822 12.3559 11.6463 12.0172 11.8118C11.6321 12 11.1281 12 10.12 12H3.88C2.87191 12 2.36786 12 1.98282 11.8118C1.64413 11.6463 1.36876 11.3822 1.19619 11.0574C1 10.6881 1 10.2046 1 9.23772V5.0185C1 4.83593 1 4.74464 1.0265 4.66198C1.04996 4.5888 1.08841 4.52086 1.13959 4.46211C1.19741 4.39575 1.27721 4.346 1.43681 4.2465L5.95362 1.43057M8.04638 1.43057C7.66763 1.19445 7.47826 1.07639 7.27422 1.03045C7.09386 0.989849 6.90614 0.989849 6.72578 1.03045C6.52174 1.07639 6.33237 1.19445 5.95362 1.43057M8.04638 1.43057L11.7617 3.74681C12.1744 4.00411 12.3807 4.13276 12.4522 4.2959C12.5147 4.43848 12.5147 4.59916 12.4522 4.74174C12.3807 4.90488 12.1744 5.03353 11.7617 5.29083L8.04638 7.60706C7.66764 7.84318 7.47826 7.96125 7.27422 8.00718C7.09386 8.04779 6.90614 8.04779 6.72578 8.00718C6.52174 7.96125 6.33237 7.84319 5.95362 7.60706L2.23832 5.29082C1.82561 5.03353 1.61925 4.90488 1.54778 4.74174C1.48533 4.59916 1.48533 4.43848 1.54778 4.2959C1.61925 4.13276 1.82561 4.00411 2.23832 3.74681L5.95362 1.43057M12.7 10.849L8.71431 7.3962M5.28569 7.3962L1.3 10.849'
              stroke='#1E1E1E'
              strokeWidth='1.65'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <a
            href='mailto:premkonsult1@gmail.com'
            className='font-afacad text-black text-sm sm:text-base hover:underline'
          >
            premkonsult1@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className='flex items-start gap-2'>
          <svg
            className='w-4 h-4 mt-1 flex-shrink-0'
            width='14'
            height='16'
            viewBox='0 0 14 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7 8.5C8.10457 8.5 9 7.60457 9 6.5C9 5.39543 8.10457 4.5 7 4.5C5.89543 4.5 5 5.39543 5 6.5C5 7.60457 5.89543 8.5 7 8.5Z'
              stroke='#1E1E1E'
              strokeWidth='1.65'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7 15C9 13 13 10.4183 13 6.5C13 3.46243 10.3137 1 7 1C3.68629 1 1 3.46243 1 6.5C1 10.4183 5 13 7 15Z'
              stroke='#1E1E1E'
              strokeWidth='1.65'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='font-afacad text-black text-sm sm:text-base'>
            17, Dipeolu, off Obafemi Awolowo way, Ikeja
          </span>
        </div>
      </div>
    </footer>
  )
}
