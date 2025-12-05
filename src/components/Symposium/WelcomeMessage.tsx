import "./WelcomeMessage.css";

const WelcomeMessage = () => {
  return (
    <>
      <p className="WM-p">
        Welcome to the BioSim Talks International Symposium 2026, to be held at
        the&nbsp;
        <a
          href="https://www.protein.osaka-u.ac.jp/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Institute for Protein Research (IPR)
        </a>
        ,&nbsp;
        <a
          href="https://www.osaka-u.ac.jp/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          The University of Osaka
        </a>
        , Japan.
      </p>

      <p className="WM-p">
        BioSim Talks is a monthly&nbsp;
        <a
          href="https://www.protein.osaka-u.ac.jp/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPR
        </a>
        ×
        <a
          href="https://prime.osaka-u.ac.jp/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WPI-PRIMe
        </a>
        &nbsp;seminar series dedicated to advancing education and training in
        computational methods for biomolecular research, with a special focus on
        inspiring and supporting young researchers. On March 12, 2026, we will
        host our first international symposium with invited speakers from Japan
        and around the world, supported by the Global Frontier Research
        Initiative at The University of Osaka. We warmly welcome participants
        from the region—from Master's students to professors—to join this
        special, intimate inaugural event.
      </p>

      <p className="WM-p">
        In addition to invited talks and a panel discussion, the program will
        feature a networking session and a poster session highlighting research
        that incorporates computational biology methods, particularly by
        early-career researchers.
      </p>

      <p className="WM-p">
        On this webpage, you will find a brief outline of the event, as well as
        practical information on access and registration.
      </p>

      <p className="WM-p">We look forward to welcoming you in March 2026.</p>
    </>
  );
};

export default WelcomeMessage;
