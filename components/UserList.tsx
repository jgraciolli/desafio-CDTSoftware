import { User } from "../types/User"

type Props = {
  users: User[]
  onSelect: (user: User) => void
}

const UserList = ({ users, onSelect }: Props) => {
  return (
    <div>
      {users.map(user => (
        <div 
        key={user.id} 
        onClick={() => onSelect(user)}  
        style={{ 
            cursor: "pointer", 
            marginTop: "20px", 
            width: "300px",
            padding: "2px", 
            border: "1px solid #ccc",}}>
          <p><b>{user.name}</b></p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList
