import Highlighter from 'react-highlight-words'

const Post = ({ post, query }) => {
  if (query) {
    return (
      <section key={post.id}>
        <h3>
          <Highlighter searchWords={[query]} textToHighlight={post.title} />
        </h3>
        <p>{post.body}</p>
      </section>
    )
  }

  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  )
}

export default Post
