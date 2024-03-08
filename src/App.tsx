import React from "react";
import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Header() {
  return <h3>Welcome to the NCAA Teams List</h3>;
}

function TeamCard(props: Team) {
  const { school, name, city, state } = props;

  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {name}</p>
      <p>
        Location: {city}, {state}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-list">
      {teamData.teams.map((team: Team, index: number) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
