import "./Title.css";

type Props = {
  children: string;
};

const Title = (props: Props) => {
  const scroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("ContentNav");
    let offset = 96;
    if (el) {
      offset = el.getBoundingClientRect().top;
    }
    const element = document.getElementById(
      props.children.replaceAll(" ", "-")
    );
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <a
      href={"#" + props.children.replaceAll(" ", "-")}
      className="Title-a"
      onClick={scroll}
    >
      <div className="Title">{props.children}</div>
    </a>
  );
};

export default Title;
