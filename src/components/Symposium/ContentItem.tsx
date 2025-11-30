import { useState } from "react";
import ContentTitle from "./ContentTitle";
import "./ContentItem.css";
type Props = {
  children: string;
  info: React.ReactNode;
};
const ContentItem = (props: Props) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="ContentItem-module">
      <ContentTitle setHide={setHide} hide={hide}>
        {props.children}
      </ContentTitle>
      <div className="ContentItem-content">
        <div className={"ContentItem-info " + (hide ? "hide" : "")}>
          {props.info}
        </div>
      </div>
    </div>
  );
};
export default ContentItem;
