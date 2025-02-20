export default function Footer(){
    return(
        <footer className="relative z-40 bg-black p-6 flex justify-center items-center text-white flex-col">
        <div className="flex justify-around items-center flex-wrap gap-10 w-full">
            <div className="flex flex-col items-center">
                <a href="/"> <img width="200px" src='/logo.png' alt="Logo hotel teomar" /></a>
            </div>
            <div>
                <h3 className="text-center text-xl font-bold">Contactos</h3> 
                <ul>
                    <li>
                       <a href="https://maps.app.goo.gl/AxrVpc1vW1mtBNYE7"><strong>Dirección: </strong> Calle 4, Raul Salmon(Plena Esquina), <br /> El Alto, Bolivia</a>
                    </li>
                    <li>
                        <a href="https://wa.me/59173534369">
                            <strong>Celular:</strong> +591 73534369
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ch.plast.plasticos@gmail.com">
                            <strong>Email:</strong> ch.plast.plasticos@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
            <span className="text-center uppercase grid place-items-center gap-5">
               <strong> Nuestras Redes Sociales</strong>
               <div className="flex items-center gap-3">
                <a href="https://www.tiktok.com/@desechables_bacan?_t=ZM-8s0NnEQq97m&_r=1" target="_blank">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" /></svg>
                </a>
                <a href="https://www.instagram.com/desechables_bacan/profilecard/?igsh=MXY4emM4bWRjNWs3Yg==" target="_blank">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="blue"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                  </a>
                  <a href="https://x.com/desechableBacan?t=Eo68EIiEwycYamYWS5Bxaw&s=09" target="_blank">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" /></svg>
                </a>
                <a href="https://wa.me/59173534369" target="_blank">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="blue"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" /></svg>
                </a>
              </div>
            </span>
        </div>
        <small>
            © 2024 Desechables Bacan. Todos los derechos reservados.
        </small>
    </footer>
    )
}