import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfileEdit from './components/ProfileEdit';
import ProfileView from './components/ProfileView';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  const profileData = {
    firstName: "Arlene",
    lastName: "McCoy",
    phoneNumber: "+91 99130 44537",
    email: "you@example.com",
    society: "Shantigram residency",
    country: "McCoy",
    state: "Gujarat",
    city: "Baroda"
  };

  const handleUpdateProfile = () => {
    setIsEditing(false);
    setActiveMenuItem('Dashboard');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeMenuItem={activeMenuItem} />
      {isEditing ? (
        <ProfileEdit onCancel={() => setIsEditing(false)} onUpdate={handleUpdateProfile} />
      ) : (
        <ProfileView 
          profileData={profileData} 
          onEditClick={() => setIsEditing(true)} 
        />
      )}
    </div>
  );
}

export default App;