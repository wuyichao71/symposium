import React from "react";
import Td from "./Td";
import "./Program.css";

const Program = () => {
  const initialTime = new Date();
  initialTime.setHours(9);
  initialTime.setMinutes(0);

  const activity = [
    { time: 15, activity: "Speakers arrive, registration" },
    { time: 15, activity: "Welcome by IPR director/Chairperson" },
    { time: 60, activity: "Ice-breaker, speed networking" },
    { time: 40, activity: "Invited Speaker 1" },
    { time: 40, activity: "Invited Speaker 1" },
    { time: 90, activity: "Lunch break" },
    { time: 40, activity: "Invited Speaker 3" },
    { time: 40, activity: "Invited Speaker 4" },
    { time: 40, activity: "Invited Speaker 5" },
    { time: 15, activity: "Coffee Break" },
    { time: 40, activity: "Invited Speaker 6" },
    { time: 40, activity: "Invited Speaker 7" },
    { time: 30, activity: "Closing comments and discussion" },
    { time: 105, activity: "Poster session + reception", shift: 20 },
  ];

  const listActivity = () => {
    const tr = [];
    let startTime = initialTime;
    for (let i = 0; i < activity.length; i++) {
      if ("shift" in activity[i]) {
        const shift = activity[i].shift ?? 0;
        startTime.setMinutes(startTime.getMinutes() + shift);
      }
      const endTime = new Date(startTime);
      endTime.setMinutes(startTime.getMinutes() + activity[i].time);
      const startTimeString = startTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const endTimeString = endTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const classIndex = (i + 1) % 2;

      tr.push(
        <React.Fragment key={i}>
          <tr className={`Program-tr${classIndex}`}>
            <Td>{`${startTimeString} - ${endTimeString}`}</Td>
            <Td>{activity[i].activity}</Td>
          </tr>
        </React.Fragment>
      );
      startTime = endTime;
    }
    return tr;
  };
  return (
    <>
      <table className="Program-table">
        <tbody>
          <tr className="Program-head">
            <Td>Time</Td>
            <Td>Activity</Td>
          </tr>
          {listActivity()}
        </tbody>
      </table>
    </>
  );
};

export default Program;
