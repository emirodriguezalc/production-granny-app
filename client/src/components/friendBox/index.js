import React from 'react';
import "./styles.css";
import avatar from '../../icons/avatar.svg'
import Button from '../button';

const FriendBox = ({ name, friends, points, inviteLink }) => (
 <section className="friend-box-section">
  <div className="friend-box-row">
   <div className="friend-box-info">
    <h1 className="friend-box-name">{name}</h1>
    {friends && <h2 className="friend-box-friends">Friends : {friends}</h2>}
    {points && <h2 className="friend-box-points">Points : {points}</h2>}
   </div>
   <img src={avatar} alt="avatar" className="friend-box-img" />
  </div>
  {inviteLink && <Button title="Invite" linkTo={inviteLink} size="small" />}
 </section>
);

export default FriendBox;
