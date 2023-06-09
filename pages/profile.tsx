import { User } from '@/types';
import React, { useState, useEffect } from 'react';
import { ProfileDisplay } from '../components/Auth/ProfileDisplay';

function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // This is a placeholder for your actual user fetch function
    fetchUserData()
      .then(userData => setUser(userData))
      .catch(error => console.error('Failed to fetch user data:', error));
  }, []);

  return (
    <div className="profile-page">
      <h1>
        Your Profile Information
      </h1>
      {user ? <ProfileDisplay user={user} /> : <div>Loading...</div>}
    </div>
  );
}

export default ProfilePage;

// Placeholder fetchUserData function for demonstration purposes.
// You would replace this with your actual user fetch function.
async function fetchUserData(): Promise<User> {
  return {
    id: '1',
    email: 'test@example.com',
    city: 'Los Angeles',
  };
}
