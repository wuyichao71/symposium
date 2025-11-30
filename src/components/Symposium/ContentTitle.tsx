// import { useState, useEffect } from "react";

import "./ContentTitle.css";
const base = import.meta.env.BASE_URL;
type Props = {
  children: string;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  hide: boolean;
};
const ContentTitle = (props: Props) => {
  return (
    <div className="ContentTitle" id={props.children.replaceAll(" ", "-")}>
      <span>{props.children}</span>
      <img
        className={`ContentTitle-arrow ${props.hide ? "rotated" : ""}`}
        src={`${base}jiantou.png`}
        width={30}
        height={30}
        onClick={() => props.setHide(!props.hide)}
      ></img>
    </div>
  );
};

export default ContentTitle;
