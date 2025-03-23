import { use } from "react"
import Friend from "./Friend";

export default function SecondUsers({ friendUser }) {
    const friends = use(friendUser);
    return (
        <div className="users-style">
            <h1>SecondUsers: {friends.length}</h1>
            {
                friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
            }
        </div>
    )
}