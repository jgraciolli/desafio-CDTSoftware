const Header = () => {
  return (
    <header className="bg-(--colors-cdtDarkGray) w-full h-28 border-b border-gray-800">
      <div className="max-w-4xl mx-auto h-full flex items-center justify-center gap-64 px-6">
        <img
          src="/CDT-LOGO-BRANCA.png"
          alt="CDT Software"
          className="h-18 w-auto"
        />

        <h1 className="text-(--colors-white) text-4xl font-semibold">
          Lista de <span className="text-(--colors-cdtLightBlue)">Usuários</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
