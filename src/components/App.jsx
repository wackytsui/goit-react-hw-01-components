import { Profile } from "./Profile/Profile";
import user from '../json/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../json/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
      />

      <Statistics title='Upload stats' stats={data} />
      
    </div>
  );
};
