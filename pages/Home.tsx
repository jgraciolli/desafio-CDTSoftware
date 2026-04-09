import { useEffect, useState } from "react"
import { fetchUsers } from "../services/api"
import { User } from "../types/User"
import SearchBar from "../components/SearchBar"
import UserList from "../components/UserList"
import UserModal from "../components/UserModal"
import Header from "../components/Header"

const Home = () => {
    const [users, setUsers] = useState<User[]>([])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])
    const [loadingUserList, setLoadingUserList] = useState(true)
    const [loadingUserModal, setLoadingUserModal] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    const loadUsers = async () => {
        try {
            const data = await fetchUsers()

            setUsers(data)
            setFilteredUsers(data)            
        } catch (e) { 
            const errorMessage = (e as Error).message        
            setError(errorMessage)

        } finally {
            setLoadingUserList(false)
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

    const loadUserModal = (user: User) => {
        setLoadingUserModal(true)

        setTimeout(() => {
            try {                            
                setSelectedUser(user)
            } catch (e) {
                const errorMessage = (e as Error).message
                setError(errorMessage)
            } finally {
                setLoadingUserModal(false)
            }
        }, 2000) // Simula um atraso de 2 segundos para demonstrar o estado de carregamento do modal do usuário
    }

  useEffect(() => {

    setTimeout(() => loadUsers(), 2000) // Simula um atraso de 2 segundos para demonstrar o estado de carregamento da lista de usuários
  }, [])

  return (
    <>
        <Header />
    
        <div 
            style={{ 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "column", 
                display: "flex", 
                padding: "20px" 
            }}>

            <h1 className="text-3xl font-bold underline">Lista de usuários</h1>
            <SearchBar onSearch={handleSearch} />

            {loadingUserList ? (              
                <p>Carregando...</p>
            ) : loadingUserModal ? (
                <p>Carregando detalhes do usuário...</p>            
            ) : error ? (
                <p>{error}. Tente novamente mais tarde.</p>
            ) : selectedUser ? (
                <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
            ) : (                        
                <UserList users={filteredUsers} onSelect={(user) => loadUserModal(user)} />                             
            )}
        </div>
    </>
  )
}

export default Home