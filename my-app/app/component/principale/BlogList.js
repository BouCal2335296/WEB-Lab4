"use client";
import BlogCard from "./BlogCard";
import React from "react";

export default function BlogList() {
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
    <div className="container">
      <div className="row d-flex justify-content-center justify-content-md-start">
        {blogs.map(blog => (
            <BlogCard key={blog.id} id={blog.id} titre={blog.titre} contenu={blog.contenu} />
          ))}
      </div>
    </div>
    </>
  );
}