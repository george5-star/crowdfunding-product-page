import Header from "./components/Header";
import ProjectDescription from "./components/ProjectDescription";
import ProjectOverview from "./components/ProjectOverview";
import ProjectStatistics from "./components/ProjectStatistics";

const App = () => {
  return (
    <div>
      <Header />
      <ProjectOverview />
      <ProjectStatistics />
      <ProjectDescription />
    </div>
  );
};

export default App;
