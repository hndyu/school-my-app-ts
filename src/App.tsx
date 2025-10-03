import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ListItem } from './components/ListItem';
import type { UserPlaceholder } from './types/user'

export const App = () => {
  const [users, setUsers] = useState<UserPlaceholder[]>([]);

  useEffect(() => {
    axios.get<UserPlaceholder[]>("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
      ))}
    </div>
  )
}
