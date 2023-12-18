import React from 'react'

interface HeadingProps {
    headingText: string;
    align: string;
}

const Heading: React.FC<HeadingProps> = ({ headingText, align }) => {
  return (
    <div id='component_Heading' className={`mb-10 flex justify-${align}`}>
        <h1 className='text-3xl font-bold'>{headingText}</h1>
    </div>
  )
}

export default Heading