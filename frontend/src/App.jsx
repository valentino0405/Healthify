import { Route, Routes } from "react-router-dom";
import EntryPage from "./components/entry/EntryPage";
import Home from "./components/homepage/Home";
import HabitTrack from "./components/habit/HabitTrack";
import { SignIn, SignUp, SignedIn,UserProfile } from "@clerk/clerk-react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/login" element={<SignIn redirectUrl="/home" />} />
      <Route path="/signup" element={<SignUp redirectUrl="/home" />} />
      <Route path="/userpro" element={<UserProfile />} />
      <Route 
        path="/home" 
        element={
          <SignedIn>
            <Home />
          </SignedIn>
        } 
      />
      <Route 
        path="/habit" 
        element={
          <SignedIn>
            <HabitTrack />
          </SignedIn>
        } 
      />
    </Routes>
  );
}

export default App;
