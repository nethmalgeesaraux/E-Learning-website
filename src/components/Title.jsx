import React from 'react'

const Title = ({title,text,Link}) => {
  return (
    <div className="flex items-center justify-between gap-6 flex-wrap">
        <div className="max-w-[720px]">
            <h2>{title}</h2>
            <p className="mt-4">{text}</p>
        </div>
        <button className= "secondary-btn shrink-0">{Link}</button>
    </div>
  )
}

export default Title
