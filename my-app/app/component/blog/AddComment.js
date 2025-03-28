function AddComment({id}) 
{

    const dateISO = new Date();
    const date = dateISO.toISOString().split('T')[0];
    const blogId = id;
    // const contenu = document.getElementById('commentaire').value;
    const [contenu, setContenu] = React.useState('');

    function handleName(event)
    {
        setContenu(event.target.value);
    }

    function handleSubmit(event)
    {
        event.preventDefault()
        fetch('http://localhost:3000/commentaire', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ blogId, date, contenu})
        })
    }


    return <>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <h4 className="pt-3 lora-font text-white">Commentaires</h4>
            </div>
            <div className="row">
                <textarea className="form-control" value={contenu} onChange={handleName} rows="4"></textarea>
            </div>
            <div className="row d-flex justify-content-end pt-3">
                <button type="submit" className="btn btn-primary btn-submit-blog">Envoyer</button>
            </div>
        </form>
    </>
}