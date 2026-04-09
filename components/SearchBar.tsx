type Props = {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: Props) => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar usuário..."
          onChange={e => onSearch(e.target.value)}
          className="w-full rounded-2xl border border-white/20 bg-(--colors-cdtDarkBlue)/80 px-6 py-4 text-(--colors-white) placeholder-(--colors-cdtGray) shadow-lg shadow-black/10 transition focus:border-(--colors-cdtLightBlue) focus:outline-none focus:ring-2 focus:ring-(--colors-cdtLightBlue)/20"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
          <svg
            className="h-5 w-5 text-(--colors-cdtGray)"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar