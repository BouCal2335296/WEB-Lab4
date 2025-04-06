import Link from "next/link";

export default function BlogCard({id, titre, contenu}){
    return <>
        <div className="col-10 col-md-3 pt-5 pt-md-0 pb-md-3">
            <Link href={`blog/${id}`} className="text-decoration-none">
                <div className="card card-animation bgDarkLight border-dark rounded-4 glow-effect d-flex align-items-center" >
                    <div className="d-flex justify-content-center img-card">
                        <img src=".//logo.PNG" className="card-img-top" alt="..."></img>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-white pl-3 lora-font d-flex align-items-center">{titre}</h5>
                        <p className="card-text text-white Open-Sans-font text-decoration-none">{contenu}</p>
                    </div>
                </div>
            </Link>
        </div>
    </>
}