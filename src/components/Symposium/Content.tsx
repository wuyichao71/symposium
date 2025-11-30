// import Td from "./Td";
import ContentNav from "./ContentNav";
import ContentMain from "./ContentMain";
import Speakers from "./Speakers";
import Program from "./Program";
import "./Content.css";

const Content = () => {
  const map = () => {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.22903258224!2d135.520131!3d34.82533359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fb64a38dc623%3A0xd673dff824d38b76!2s1-1%20Yamadaoka%2C%20Suita%2C%20Osaka%20565-0871!5e0!3m2!1szh-CN!2sjp!4v1763056071885!5m2!1szh-CN!2sjp"
        width="600"
        height="450"
        style={{ border: 0, margin: "auto" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  };
  const content = [
    "About",
    "Welcome Messege",
    "Confirmed Invited Speakers",
    "Program",
    "Registration",
    "Abstract for posters",
    "Access",
  ];
  const about = (
    <>
      <p className="Content-p">Welcome to the BioSim Symposium!</p>
      <p className="Content-p">
        We are delighted to invite you to this symposium, which aims to:
      </p>
    </>
  );

  const welcomeMessage = <></>;
  const confirmedInvitedSpeakers = <Speakers />;
  const program = <Program />;
  const registration = <></>;
  const abstractForPosters = <></>;
  const access = (
    <>
      <p className="Content-p2">
        <a
          href="https://www.protein.osaka-u.ac.jp/en/access/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.protein.osaka-u.ac.jp/en/access/
        </a>
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>{map()}</div>
      <p className="Content-p2">
        Institute for Protein Research, The University of Osaka 3-2 Yamadaoka,
        Suita-shi, Osaka 565-0871, Japan
      </p>
    </>
  );
  return (
    <div className="Content">
      <ContentNav content={content} />
      <ContentMain
        content={content}
        info={[
          about,
          welcomeMessage,
          confirmedInvitedSpeakers,
          program,
          registration,
          abstractForPosters,
          access,
        ]}
      />
    </div>
  );
};

export default Content;
