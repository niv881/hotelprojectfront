import React, { ReactNode} from "react";
import { ClassName } from "../utils/interfeces/@Types";

interface Props {
  style?:ClassName
  children:ReactNode
}



const Card = ({style,children}:Props)=> {

  const styles = `md:w-2/4  m-auto mt-10 p-5 ${style?.background} dark:${style?.drakMode} xl:flex justify-center  border rounded-lg shadow-lg `

  return (
    <>
        <div className={styles}>
          {children}
        </div>
    </>
  );
};

export default Card;
