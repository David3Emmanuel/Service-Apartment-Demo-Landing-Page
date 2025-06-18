export default function Locations() {
  const locations = ['Yaba', 'Surulere', 'Alagbado', 'Anthony']

  return (
    <section className='flex justify-center py-6 md:py-8 w-full bg-white'>
      <div className='flex flex-col items-center w-full gap-8 md:gap-14'>
        {/* Top Divider */}
        <div className='w-full h-[1px] bg-[rgba(159,159,159,0.49)]'></div>

        {/* Content */}
        <div className='flex flex-col items-center justify-around px-4 w-full gap-4'>
          {/* Title */}
          <h2 className='text-[#1E1E1E] text-center font-[Afacad] text-3xl md:text-4xl font-medium'>
            Located in Lagos
          </h2>

          {/* Locations */}
          <div className='flex flex-col md:flex-row justify-around items-center w-full'>
            {locations.map((location, index) => (
              <div
                key={index}
                className='text-[#1E1E1E] text-center font-[Afacad] text-xl md:text-2xl'
              >
                {location}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className='w-full h-[1px] bg-[rgba(159,159,159,0.49)]'></div>
      </div>
    </section>
  )
}
