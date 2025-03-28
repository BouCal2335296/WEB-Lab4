function Comment({commentaire})
{
    return <>
    <div className="row pt-4">
        <div className="col-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle border-dark rounded-4 glow-effect bgBlue" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
        </div>
        <div className="col-11">
            <p className="Open-Sans-font text-white">{commentaire}</p>
        </div>
    </div>
    </>
}