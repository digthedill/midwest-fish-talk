import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { getMockUsers, getMockPosts, getAllMockPosts } from '../lib/mockData'
import Highlighter from 'react-highlight-words'

import styles from '../styles/dashboard.module.scss'

// add posts pagination

// options to add information to your profile
// need to figure out how to write mutations or use typeORM to add content to database

// customize profile section

const searchPosts = async (query: string, posts: any) => {
  if (!query) return

  return posts.filter((post) => {
    const results = post.title.includes(query)
    return results
  })
}

const Dashboard = () => {
  const [users, setUsers] = useState(null)
  const [posts, setPosts] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState(null)
  const [allPosts, setAllPosts] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(null)

  const [session, loading] = useSession()
  const router = useRouter()

  const incrementPage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    getMockUsers().then((data) => {
      setUsers(data)
    })
    getMockPosts(page).then((data) => {
      setPosts(data)
    })
    getAllMockPosts().then((data) => setAllPosts(data))
  }, [page])

  useEffect(() => {
    searchPosts(query, allPosts).then((data) => setFilteredPosts(data))
  }, [setQuery, query])

  if (loading) return null

  if (!session) router.push('/')
  if (!loading && !session) return null

  return (
    <div className={styles.wrapper}>
      <header className={styles.mainHead}>
        {' '}
        <h1>{session.user.name}</h1>
        <p>YAAASSSSSS</p>
      </header>
      <nav className={styles.mainNav}>
        <ul className={styles.navItems}>
          <li>hey buddy</li>
          <li>doin good!</li>
        </ul>
      </nav>
      <article className={styles.content}>
        <h2>Posts</h2>
        <input
          type="text"
          placeholder="Search Posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />

        <button onClick={incrementPage}>More Posts</button>
        {filteredPosts
          ? filteredPosts.map((post) => {
              return (
                <section key={post.id}>
                  <h3>
                    <Highlighter
                      searchWords={[query]}
                      textToHighlight={post.title}
                    />
                  </h3>
                  <p>{post.body}</p>
                </section>
              )
            })
          : !posts
          ? 'Loading ...'
          : posts.map((post) => {
              return (
                <section key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </section>
              )
            })}
      </article>
      <aside className={styles.side}>
        {!users ? (
          'Loading...'
        ) : (
          <div>
            {users.map((user) => {
              return (
                <>
                  <strong key={user.id}>{user.username}</strong>
                  <br />
                </>
              )
            })}{' '}
          </div>
        )}
      </aside>
    </div>
  )
}

export default Dashboard
