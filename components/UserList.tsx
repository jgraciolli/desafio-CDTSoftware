import { User } from "../types/User"

type Props = {
  users: User[]
  onSelect: (user: User) => void
}

const UserList = ({ users, onSelect }: Props) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
      {users.length === 0 ? (
        <div className="col-span-full rounded-2xl border border-white/10 bg-(--colors-cdtDarkBlue)/80 p-8 text-center text-(--colors-cdtGray)">
          Nenhum usuário encontrado. Tente outro nome ou limpar a busca.
        </div>
      ) : (
        users.map(user => (
          <div
            key={user.id}
            className="rounded-2xl border border-white/10 bg-(--colors-cdtDarkGray)/80 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-2xl font-semibold text-(--colors-white)">{user.name}</p>
                <p className="text-sm text-(--colors-white) mt-2">Usuário:<p className="text-sm text-(--colors-cdtLightBlue)">@{user.username}</p></p>
              </div>

              <button
                type="button"
                onClick={() => onSelect(user)}                
                className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-(--colors-cdtLightBlue) bg-(--colors-cdtLightBlue)/10 px-4 py-2 text-sm font-semibold text-(--colors-white) transition hover:bg-(--colors-cdtLightBlue) hover:text-(--colors-cdtDarkBlue)"
              >
                <span>Ver detalhes</span>
                <span aria-hidden="true">➜</span>
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Email</p>
                <p className="mt-2 text-sm text-(--colors-white) wrap-break-word">{user.email}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Empresa</p>
                <p className="mt-2 text-sm text-(--colors-white)">{user.company.name}</p>
              </div>
            </div>            
          </div>
        ))
      )}
    </div>
  )
}

export default UserList
