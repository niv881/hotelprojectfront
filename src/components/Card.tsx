import React, { ReactNode} from "react";
import { ClassName } from "../utils/interfeces/@Types";

interface Props {
  style?:ClassName
  children:ReactNode
}



const Card = ({style,children}:Props)=> {
  return (
    <>
        <div className= "md:w-2/4  m-auto mt-10 p-5  bg-slate-400  dark:bg-slate-600  xl:flex justify-center  border rounded-lg shadow-lg">
          {children}
        </div>
    </>
  );
};

export default Card;
