import { useState } from 'react';
 
export default function Page() {
  const [user, setUser] = useState('user');
  const [loading, setLoading] = useState(true);
 
  return {
    user,
    loading,
  };
};