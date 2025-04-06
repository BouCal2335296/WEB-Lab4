import Link from "next/link";

export default function Header()
{
    return <>
    <header>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <nav className="navbar bgDarkLight mt-2 navbar-expand-md mb-md-3 rounded-4 rounded-4">
                    <div className="container-fluid">
                        {/* Logo (desktop) */}
                        <img src="/logo1.PNG" className="img-fluid d-none d-md-block img-card-desktop rounded-2"></img>
                        {/* Logo (mobile) */}
                        <img src="/logo1.PNG" className="col-5 img-fluid d-block d-md-none ms-4 img-card-mobile rounded-2"></img>
                    
                        {/* Bouton menu burger */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        {/* Contenu de la navbar */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex align-items-md-center justify-content-between">
                            <li className="nav-item"><Link className="nav-link option-nav active lora-font text-white" href="/">Menu 1</Link></li>
                            <li className="nav-item"><a className="nav-link option-nav lora-font text-white" href="#">Menu 2</a></li>
                            <li className="nav-item"><a className="nav-link option-nav lora-font text-white" href="#">Menu 3</a></li>
                            <li className="nav-item"><a className="nav-link option-nav lora-font text-white" href="#">Menu 4</a></li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle imgNav" viewBox="0 0 16 16  ">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  </header>
  </>
}