import { Button } from "antd";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="R-flex">
      <p className="R-p">
        Please submit an abstract for the poster session when you register.{" "}
      </p>
      <p className="R-p">
        It is not mandatory for participation, but highly encouraged, especially
        for students and young researchers, for the best symposium experience.
        Please note that we may limit the number of posters at this event.
      </p>
      <p className="R-p">
        Registration (with abstract submission) deadline is{" "}
        <span style={{ color: "red" }}>the 15th of February 2026</span>. The
        final participation registration deadline is{" "}
        <span style={{ color: "red" }}>the 25th of February 2026</span>.
      </p>
      <p className="R-p">
        Please do not hesitate to email us (
        <a href="mailto:sandhyatiwari@protein.osaka-u.ac.jp">
          sandhyatiwari@protein.osaka-u.ac.jp
        </a>
        or{" "}
        <a href="mailto:shinobu.ai.prime@osaka-u.ac.jp">
          shinobu.ai.prime@osaka-u.ac.jp
        </a>
        ) if you have any questions or concerns.
      </p>
      <div className="R-align">
        <Button
          color="primary"
          // size="large"
          variant="solid"
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=4I7Qo5BbM0-dFJYCO7eKYqIYeebfVcJChLShsiI9svFUOU9QOEgxNkhDTUs4QjAzT1RER0wzVkNYVC4u"
          className="R-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Registration
        </Button>
      </div>
    </div>
  );
};

export default Registration;
