import "./ContentMain.css";
import ContentItem from "./ContentItem";
// import ContentTitle from "./ContentTitle";

type Props = {
  content: string[];
  info: React.ReactNode[];
};

const ContentMain = (props: Props) => {
  const listContent = () => {
    return props.content.map((item, index) => (
      <ContentItem key={index} info={props.info[index]}>
        {item}
      </ContentItem>
    ));
  };
  return <div className="ContentMain">{listContent()}</div>;
};

export default ContentMain;
