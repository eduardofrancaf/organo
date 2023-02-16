import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [employeesList, setEmployeesList] = useState([]);
  const onAddEmployee = (newEmployee) => {
    debugger;
    setEmployeesList((v) => [...v, newEmployee]);
  };

  const teams = [
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onAddEmployeeCallback={onAddEmployee}
      />
      {teams.map((team) => {
        const teamMembers = employeesList.filter((e) => e.team === team.name);
        return (
          teamMembers.length > 0 && (
            <Team
              key={team.name}
              name={team.name}
              primaryColor={team.primaryColor}
              secondaryColor={team.secondaryColor}
              members={teamMembers}
            />
          )
        );
      })}
    </div>
  );
}

export default App;
