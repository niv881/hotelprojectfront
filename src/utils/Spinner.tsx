import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import {SpinnerProps} from "../utils/interfeces/@Types"



const Spinner = ({title,className}:SpinnerProps) => {
  return (
    <div className={className ?? 'my-10 flex flex-col justify-center items-center'}>
        <p>{title ?? 'Loading'}</p>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
    </div>
  );
};

export default Spinner;