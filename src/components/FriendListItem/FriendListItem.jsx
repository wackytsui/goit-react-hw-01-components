export const FriendListItem = ({friend}) => {
    return (
        <li>
            <span></span>
            <img src={friend.avatar} alt=""/>  
            <p>{friend.name}</p>
        </li>
    )
}