type Props = {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Buscar usuário..."
      onChange={e => onSearch(e.target.value)}
    />
  )
}

export default SearchBar