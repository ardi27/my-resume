import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";

export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="p-8 lg:px-52 md:py-0">
        <Summary />
        <WorkExperience />
      </div>
    </div>
  );
}
