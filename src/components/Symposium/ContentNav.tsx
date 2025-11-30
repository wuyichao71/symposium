import Title from "./Title";
import "./ContentNav.css";

type Props = {
  content: string[];
};

const ContentNav = (props: Props) => {
  const listTitle = () => {
    return props.content.map((item, index) => (
      <Title key={index}>{item}</Title>
    ));
  };
  return (
    <nav className="ContentNav" id="ContentNav">
      {listTitle()}
    </nav>
  );
};

export default ContentNav;
