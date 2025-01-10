import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Hey, {user.username}!</h1>
      <p>
        Welcome to your dashboard!
      </p>
    </main>
  );
};

export default Dashboard;
