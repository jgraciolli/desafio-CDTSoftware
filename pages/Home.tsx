import { useEffect, useState } from "react"
import { fetchUsers } from "../services/api"
import { User } from "../types/User"

const Home = () => {
    const [users, setUsers] = useState<User[]>([])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const loadUsers = async () => {
        try {
            const data = await fetchUsers()

            setUsers(data)
            setFilteredUsers(data)

            console.log(data)
        } catch (e) { 
            const errorMessage = (e as Error).message        
            setError(errorMessage)

        } finally {
            setLoading(false)
        }
    }

  useEffect(() => {

    setTimeout(() => loadUsers(), 2000) // Simula um atraso de 2 segundos para demonstrar o estado de carregamento
  }, [])

  return (
    <div>
        {loading ? (
            <p>Carregando...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Home