import { useNavigate } from 'react-router-dom'
import css from './postcard.module.css'
import { formatDate } from '../utils/features'

export const PostCard = ({ post }) => {
  const navigete = useNavigate()
  const { title, summary, createdAt, author, cover, _id } = post
  const goDetailPage = () => {
    navigete(`/detail/${_id}`)
  }
  return (
    <article className={css.postcard} onClick={goDetailPage}>
      <h3>{title}</h3>
      <p className={css.img}>
        <img src={`${import.meta.env.VITE_BACK_URL}/${cover}`} alt={title} />
      </p>
      <p className={css.tilte}>{summary}</p>
      <p className={css.careateAt}>{formatDate(createdAt)}</p>
      <p className={css.author}>{author}</p>
    </article>
  )
}
