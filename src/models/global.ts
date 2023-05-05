import { useState } from 'react';

export default function Page() {
  const [user, setUser] = useState('全局数据user');
  const [loading, setLoading] = useState(true);

  return {
    user,
    loading,
  };
}
