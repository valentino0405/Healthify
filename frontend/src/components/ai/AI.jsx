import Header from "./Header";
import HealthDashboard from "./HealthDashboard";
const AI = () => {
  return (
    <div>
            <Header/>
            <div className='mx-5 md:mx-20 lg:mx-36'>
            <HealthDashboard/>
            </div>
    </div>
  );
}

export default AI;
