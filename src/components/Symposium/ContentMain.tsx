import "./ContentMain.css";

type Props = {
  content: string[];
  info: React.ReactNode[];
};

const ContentMain = (props: Props) => {
  const listContent = () => {
    return props.content.map((item, index) => (
      <div className="ContentMain-module" key={index}>
        <div className="ContentMain-title">{item}</div>
        <div className="ContentMain-content">{props.info[index]}</div>
      </div>
    ));
  };
  return <div className="ContentMain">{listContent()}</div>;
};

export default ContentMain;
