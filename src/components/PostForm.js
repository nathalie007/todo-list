"use client";

import { useRouter } from "next/navigation";

const PostForm = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    }).then(()=>{
        router.refresh()
    })
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" name="title" placeholder="Ajouter une tache..." />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default PostForm;
