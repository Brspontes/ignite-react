import styles from './Post.module.css'
import { Comment } from './Comment'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/14333695?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Brian Pontes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio as 11:13" dateTime="2022-05-11 08:13:30">
          Publicado a 1hr
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          minus! Suscipit blanditiis earum quis harum? Asperiores, blanditiis
          alias sequi tempore sed deleniti assumenda cupiditate, incidunt eius
          accusantium nesciunt, nemo magni.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          minus! Suscipit blanditiis earum quis harum? Asperiores, blanditiis
          alias sequi tempore sed deleniti assumenda cupiditate, incidunt eius
          accusantium nesciunt, nemo magni.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          minus! Suscipit blanditiis earum quis harum? Asperiores, blanditiis
          alias sequi tempore sed deleniti assumenda cupiditate, incidunt eius
          accusantium nesciunt, nemo magni.
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
