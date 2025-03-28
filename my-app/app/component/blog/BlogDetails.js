
function BlogDetails({id})
{
    const [blogDetail, setBlogDetail] = React.useState(null);

    React.useEffect(() => {

        fetch("http://localhost:3000/publication")
        .then(reponse => reponse.json())
        .then(data => {
            const blog = data.find(blog => blog.id == id);
            setBlogDetail(blog);})
        .catch(error => console.error("Erreur de chargement des blogs :", error));
    }, [])

    if (!blogDetail || !blogDetail.titre || !blogDetail.contenu) return <p>Chargement...</p>;

    return (<>
        <div className="container">
            <div className="row justify-content-center">
            {/* Logo (desktop) */}
            <img src="../image/logo.PNG" className="img-fluid d-none d-md-block pt-3 img-blog-desktop" />
            {/* Logo (mobile) */}
            <img src="../image/logo.PNG" className="img-fluid d-block d-md-none pt-3" />
            </div>
        </div>
        <div className="row">
            <h1 className="text-center pt-3 lora-font text-white">{blogDetail.titre}</h1>
        </div>
        <div className="row">
            <p className="Open-Sans-font text-white">{blogDetail.contenu}</p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
            <img src="../../image/logo.PNG" className="img-fluid  pt-3 img-2-index"/>
        </div>
        <div className="row">
            <h5 className="text-center pt-3 lora-font text-white">Caption</h5>
        </div>
        <div className="row">
            <p className="Open-Sans-font text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus enim natus dignissimos placeat fuga et eum! Cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequuntur incidunt ut odit nulla accusantium quidem modi ratione a impedit facilis quisquam, libero voluptas beatae dolorum accusamus minus cum vel!</p>
        </div>
        <div className="container">

        
    </div>
      </>
    );
}