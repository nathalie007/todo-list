import PostItem from "@/components/PostItem";
import PostForm from "@/components/PostForm";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <div className={styles.description}>
          <p className={styles.kicker}>Organisation personnelle</p>
          <h1>Todo List Pro</h1>
          <p className={styles.subtitle}>
            Une interface claire pour capturer, prioriser et terminer vos
            taches sans friction.
          </p>
          <div className={styles.stats}>{posts.length} tache(s)</div>
          <PostForm />
          <div className={styles.list}>
            {posts.map((post: (typeof posts)[number]) => (
              <PostItem post={post} key={post.id} />
            ))}
            {posts.length === 0 && (
              <p className={styles.empty}>Aucune tache pour le moment.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
