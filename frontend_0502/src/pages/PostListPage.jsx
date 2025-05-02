import { useEffect, useState } from 'react'
import { PostCard } from '../components/PostCard'
import css from './postlistpage.module.css'
import { getPostList } from '../apis/postApi'

export const PostListPage = () => {
  const [postList, setPostList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getPostList()
        console.log(data)
        setPostList(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setError('데이터를 가져오는 중 오류가 발생했습니다.')
      }
    }
    fetchPostList()
  }, [])
  return (
    <main className={css.postlistpage}>
      <h2>리스트</h2>
      {error && <p className={css.error}>{error}</p>}
      {loading ? (
        <p>로딩중 ...</p>
      ) : postList.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : (
        <ul className={css.postlist}>
          {postList.map(post => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
