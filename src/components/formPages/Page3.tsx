import React from "react";
import User from "../../assets/User.svg";
import Users from "../../assets/Users.svg";

export const Page3: React.FC = () => {
  const [activeSec, setActiveSec] = React.useState(0);
  //? Creating array of objects like we did on home page is better approach for scaling rather than hard coding like on this page
  return (
    <div className="page3">
      <div
        className={`page3__sec ${activeSec === 0 ? "active--sec" : ""}`}
        onClick={() => setActiveSec(0)}
      >
        <img src={User} alt="" width={32} />
        <h3>For myself</h3>
        <p>Write better. Think more clearly. Stay organized.</p>
      </div>
      <div
        className={`page3__sec ${activeSec === 1 ? "active--sec" : ""}`}
        onClick={() => setActiveSec(1)}
      >
        <img src={Users} alt="" width={32} />
        <h3>With my team</h3>
        <p>Wiki, docs, tasks & project, all in one place.</p>
      </div>
    </div>
  );
};
