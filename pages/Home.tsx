import { useEffect, useState } from "react"
import { fetchUsers } from "../services/api"
import { User } from "../types/User"
import SearchBar from "../components/SearchBar"
import UserList from "../components/UserList"
import UserModal from "../components/UserModal"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
                padding: "20px",
                marginBottom: "10px" 
            }}>

            <h1 className="text-4xl font-extrabold tracking-tight text-(--colors-cdtDarkBlue) sm:text-5xl">
                Painel de Usuários CDT
            </h1>
            <p className="mt-3 max-w-2xl text-md font-bold text-(--colors-cdtGray)">
                Encontre e visualize rapidamente os detalhes de cada usuário na plataforma.
            </p>
            <div className="mt-8 mb-8 w-full max-w-xl">
                <SearchBar onSearch={handleSearch} />
            </div>

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
        <Footer />
    </>
  )
}

export default Home