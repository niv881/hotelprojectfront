import React from 'react'
import { BTNProps } from './interfeces/@Types'



const Button = ({onClick , text}:BTNProps) => {
  return (
    <button
            onClick={onClick}
            className="bg-gray-950 dark:bg-gray-300 text-gray-400 border dark:text-gray-950  border-gray-400 dark:border-gray-950 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 dark:hover:brightness-90 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-gray-400 dark:bg-gray-950 shadow-gray-400 dark:shadow-gray-950 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            {text}
          </button>
  )
}

export default Button