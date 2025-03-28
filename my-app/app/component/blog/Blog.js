function getBlogId()
{
    const urlIdBlog = new URLSearchParams(window.location.search);
    return urlIdBlog.get("id");
}

function App()
{
    
    return <>
    <BlogDetails id={getBlogId()} />
    <AddComment id={getBlogId()}/>
    <CommentList id={getBlogId()}/>
    </>
}

const container = document.querySelector("#blog")
const root = ReactDOM.createRoot(container)
root.render(<App />)