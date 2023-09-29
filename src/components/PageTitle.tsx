import React from "react";
import {Title} from "../utils/interfeces/@Types"


const PageTitle = ({title} : Title) => {
  return <div className="w-2/4 m-auto p-3 rounded-lg gap-3 text-center bg-summerGreen" >{title}</div>;
};

export default PageTitle;
