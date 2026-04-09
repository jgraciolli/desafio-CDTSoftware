import { User } from "../types/User"

type Props = {
  user: User | null
  onClose: () => void
}

const UserModal = ({ user, onClose }: Props) => {
  if (!user) return null

  return (
    <div className="modal" style={{ margin: "10px"}}>
      <button onClick={onClose}>Fechar</button>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Telefone: {user.phone}</p>
      <p>Empresa: {user.company.name}</p>
      <p>Cidade: {user.address.city}</p>
    </div>
  )
}

export default UserModal
