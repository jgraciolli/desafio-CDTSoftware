import { useEffect, useState } from "react"
import { fetchUsers } from "../services/api"
import { User } from "../types/User"
import SearchBar from "../components/SearchBar"
import UserList from "../components/UserList"

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

    const formatNameString = (name: string) => {
        return name.toLowerCase().replace(/\s/g, '') // Coloca o nome em minúsculas e remove espaços para facilitar a comparação
    }

    const handleSearch = (value: string) => { 
        const filtered = users.filter(user => {
            const formattedName = formatNameString(user.name)
            const formattedValue = formatNameString(value)

            return formattedName.includes(formattedValue)
        })

        setFilteredUsers(filtered)
    }

  useEffect(() => {

    setTimeout(() => loadUsers(), 2000) // Simula um atraso de 2 segundos para demonstrar o estado de carregamento
  }, [])

  return (
    <div 
        style={{ 
            alignItems: "center", 
            justifyContent: "center", 
            flexDirection: "column", 
            display: "flex", 
            padding: "20px" 
        }}>

        <h1>Lista de usuários</h1>
        <SearchBar onSearch={handleSearch} />

        {loading ? (
            <p>Carregando...</p>
        ) : error ? (
            <p>{error}. Tente novamente mais tarde.</p>
        ) : (             
            <UserList users={filteredUsers} onSelect={(user) => alert(`Usuário selecionado: ${user.name}`)} />                                                               
        )}
    </div>
  )
}

export default Home