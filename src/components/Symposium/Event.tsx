import "./Event.css";
import { base } from "../../utility.tsx";

const Event = () => {
  return (
    <div className="Event-info">
      <div className="Event-img">
        <img
          className="Event-content"
          src={`${base}banner.png`}
          alt="banner.png"
        />
      </div>
      <div className="Event-text">
        <section>
          <h2 className="Event-text-title">
            BioSim Talks International Symposium 2026: Inspiring the Next
            Generation in Modeling and Simulations
          </h2>
          <p className="Event-text-content">BioSim</p>
        </section>
        <hr className="Event-text-hr" />
        <section>
          <h2 className="Event-text-content">Date</h2>
          <p className="Event-text-content">March 12, 2026</p>
        </section>
        <hr className="Event-text-hr" />
        <section>
          <h2 className="Event-text-content">Venue</h2>
          <p className="Event-text-content">
            IPR Main Auditorium (1F), 3-2 Yamadaoka, Suita, Osaka, Japan
            565-0871
          </p>
        </section>
      </div>
    </div>
  );
};
export default Event;
