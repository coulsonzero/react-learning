import React, {useState, useEffect, useProps, useFriendStatus} from 'react'

function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);
  
    return (
      <li style={{ color: isOnline ? 'green' : 'black' }}>
        {props.friend.name}
      </li>
    );
  }