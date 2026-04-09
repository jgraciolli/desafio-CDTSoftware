import { User } from "../types/User"

type Props = {
  user: User | null
  onClose: () => void
}

const UserModal = ({ user, onClose }: Props) => {
  if (!user) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl rounded-3xl border border-white/10 bg-(--colors-cdtDarkBlue)/95 p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="cursor-pointer absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-(--colors-white) transition hover:bg-(--colors-cdtLightBlue) hover:text-(--colors-cdtDarkBlue)"
        >
          <span className="text-lg">✕</span>
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-(--colors-white)">{user.name}</h2>
          <p className="mt-2 text-(--colors-cdtLightBlue)">@{user.username}</p>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Email</p>
              <p className="mt-3 wrap-break-word text-sm text-(--colors-white)">{user.email}</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Telefone</p>
              <p className="mt-3 text-sm text-(--colors-white)">{user.phone}</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Website</p>
              <p className="mt-3 wrap-break-word text-sm text-(--colors-cdtLightBlue)">{user.website}</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Empresa</p>
              <p className="mt-3 text-sm text-(--colors-white)">{user.company.name}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Frase da Empresa</p>
            <p className="mt-3 text-sm text-(--colors-white)">{user.company.catchPhrase}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Serviços</p>
            <p className="mt-3 text-sm text-(--colors-white)">{user.company.bs}</p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="mb-4 text-lg font-semibold text-(--colors-white)">Endereço</h3>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Rua</p>
                <p className="mt-3 text-sm text-(--colors-white)">{user.address.street}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Complemento</p>
                <p className="mt-3 text-sm text-(--colors-white)">{user.address.suite}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Cidade</p>
                <p className="mt-3 text-sm text-(--colors-white)">{user.address.city}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">CEP</p>
                <p className="mt-3 text-sm text-(--colors-white)">{user.address.zipcode}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Latitude</p>
                <p className="mt-3 text-sm text-(--colors-white)">{user.address.geo.lat}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-[0.85rem] uppercase tracking-[0.15em] text-(--colors-cdtGray)">Longitude</p>
                <p className="mt-3 text-sm text-(--colors-white)">{user.address.geo.lng}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserModal
