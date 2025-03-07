import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService';
import HopshopList from './components/HopshopList/HopshopList';
import * as hopshopService from './services/hopshopService';
import HopshopDetails from './components/HopshopDetails/HopshopDetails';
import HopshopForm from './components/HopshopForm/HopshopForm';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [hopshops, setHopshops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllHopshops = async () => {
      const hopshopsData = await hopshopService.index();
      setHopshops(hopshopsData);
    };
    if (user) fetchAllHopshops();
  }, [user]);

  const handleAddHopshop = async (hopshopFormData) => {
    const newHopshop = await hopshopService.create(hopshopFormData);
    setHopshops([newHopshop, ...hopshops]);
    navigate('/hopshops');
  };

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/hopshops" element={<HopshopList hopshops={hopshops} />} />
              <Route path="/hopshops/:hopshopId" element={<HopshopDetails />} />
              <Route path="/hopshops/new" 
                element={<HopshopForm handleAddHopshop={handleAddHopshop} />} 
              />
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
