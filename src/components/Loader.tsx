import React from 'react';

//import { loader } from '../assets';

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className='text-zinc-500 w-full text-lg md:text-xl lg:text-2xl text-center absolute left-0 top-[40%]'>
        Your data is loading...
      </h2>
    </div>
  )
}

export default Loader