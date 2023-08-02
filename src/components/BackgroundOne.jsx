const BackgroundOne = ({ children }) => {
  return (
    <div className='flex h-full w-full relative'>
      <div className='w-2/4 h-full bg-gradient-to-t from-teal-600 to-teal-400 via-teal-700'></div>
      <div className='h-full'></div>
      <div className='bg-white h-fit w-fit absolute flex items-center justify-center inset-0 m-auto shadow-lg rounded-xl'>
        {children}
      </div>
    </div>
  );
};

export default BackgroundOne;
