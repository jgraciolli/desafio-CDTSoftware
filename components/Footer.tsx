const Footer = () => {
  return (
    <footer className="bg-(--colors-cdtDarkBlue) text-(--colors-white) w-full border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold uppercase tracking-wider"> Sobre nós </h2>
                        
                    <p className="max-w-xl text-sm leading-7 text-(--colors-cdtGray)">
                        COM TECNOLOGIAS INOVADORAS, TRABALHAMOS PARA FACILITAR O SEU DIA A DIA E POTENCIALIZAR RESULTADOS!
                    </p>

                    <div className="flex items-center gap-3">
                        <a
                            className="elementor-icon ..."
                            href="https://www.facebook.com/cdt.software"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <span className="elementor-screen-only">Facebook</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="social-icon">
                                <path d="M9.198 21.825h4.393V9.942h3.263l.488-3.774h-3.751V4.25c0-1.086.243-1.83 1.497-1.83h2.01V.051h-2.721c-3.198 0-4.785 1.551-4.785 4.403v2.766H7.446v3.774h1.752V21.825z"/>
                            </svg>
                        </a>
                              
                        <a
                            href="https://www.instagram.com/cdt.software/"
                            className="elementor-icon ..."
                            aria-label="Instagram"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="elementor-screen-only">Instagram</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                                <path d="M17.5 6.5h.01" />
                            </svg>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCJw1Jp0SJZud_WkuiMLBNLQ"
                            className="elementor-icon ..."
                            aria-label="YouTube"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="elementor-screen-only">YouTube</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="social-icon">
                                <path d="M23 7.5a2.9 2.9 0 0 0-2-2c-1.8-.4-9-.4-9-.4s-7.2 0-9 .4a2.9 2.9 0 0 0-2 2A29 29 0 0 0 0 12a29 29 0 0 0 .1 4.5 2.9 2.9 0 0 0 2 2c1.8.4 9 .4 9 .4s7.2 0 9-.4a2.9 2.9 0 0 0 2-2A29 29 0 0 0 24 12a29 29 0 0 0-.1-4.5ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="space-y-8" >
                    <h2 className="text-3xl font-bold uppercase tracking-wider"> Contato</h2>

                    <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <img src="/ICONE-EMAIL.jpg" alt="Email" className="h-5 w-5" />
                            <span className="text-(--colors-cdtGray) group-hover:text-(--colors-cdtLightBlue) transition-colors duration-200">comercial@cdtsoftware.com.br</span>
                        </div>

                        <div className="flex items-center gap-3 group cursor-pointer">
                            <img src="/ICONE-WHATSAPP.jpg" alt="WhatsApp" className="h-5 w-5" />
                            <span className="text-(--colors-cdtGray) group-hover:text-(--colors-cdtLightBlue) transition-colors duration-200">
                                <a href="https://wa.me/5512982787900" target="_blank" rel="noopener noreferrer">+55 12 98278-7900</a>
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <img src="/ICONE-TELEFONE.jpg" alt="Telefone" className="h-5 w-5" />
                            <span className="text-(--colors-cdtGray) group-hover:text-(--colors-cdtLightBlue) transition-colors duration-200">
                                <a href="tel:+55%2012%203922-7900">+55 12 3922-7900</a>                                
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 border-t border-gray-800 pt-10 text-center">
                <img
                    src="/CDT-LOGO-BRANCA.png"
                    alt="CDT Software"
                    className="mx-auto h-12 w-auto"
                />

                <p className="mt-6 text-sm text-(--colors-cdtGray)">CDT Software Tecnologia Ltda.</p>
                <p className="mt-2 text-xs text-(--colors-cdtGray)">
                    Copyright © 2022 CDT Software. Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
