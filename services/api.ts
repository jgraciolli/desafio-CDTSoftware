import { User } from "../types/User"
import axios, { type AxiosError } from "axios"
import { api } from "./axiosConfig"

export async function fetchUsers(): Promise<User[]> {
  try {

    const response = await api.get<User[]>("/users")
    return response.data

  } catch (e) {

    if (!axios.isAxiosError(e)) 
        throw new Error("Não foi possível carregar usuários")            
    
    const error = e as AxiosError

    if (error.response) {
        throw new Error(
            `Erro na API: ${error.response.status} ${error.response.statusText}`
        )
    }

    if (error.request) {
        throw new Error("Erro de rede: não foi possível conectar à API")
    }

    throw new Error("Erro desconhecido: " + error.message)
  }
}
