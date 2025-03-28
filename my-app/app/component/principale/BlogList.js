
function BlogList() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/publication")
      .then(response => response.json())
      .then(data => { setBlogs(data); })
      .catch(error => console.error("Erreur de chargement des blogs :", error));
  }, []); // Se lance une seule fois au montage du composant

  if (!blogs) return <p>Chargement...</p>;

  return (
    <>
      {blogs.map(blog => (
          <BlogCard key={blog.id} id={blog.id} titre={blog.titre} contenu={blog.contenu} />
        ))}
    </>
  );
}