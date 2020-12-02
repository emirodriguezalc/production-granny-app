import React from 'react';
import Header from '../header';
import './styles.css';
import FriendBox from '../friendBox'

const ListPage = ({ list, backTo, title }) => (
 <section className="list-page-section">
  <Header title={title} backTo={backTo} />
  <div className="list-page-list">
   {list.map(friend => <FriendBox name={friend.name} friends={friend.friends} points={friend.points} inviteLink={friend.inviteLink} />)}
  </div>
 </section>
);

export default ListPage;
