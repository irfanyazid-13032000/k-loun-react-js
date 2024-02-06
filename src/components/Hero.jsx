import mesincuci from '../../public/img/mesincuci.jpg'

export default function Hero() {
  return (
    <div className="py-10">
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
            laundry terbaik di dunia
          </h1>
          <img src={mesincuci}/>
        </div>
      </div>
    </div>
  )
}
