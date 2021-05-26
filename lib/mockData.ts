const getMockUsers = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await req.json()
  return users
}

const getMockPosts = async (pageNumber: number) => {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${pageNumber}`
  )
  const posts = await req.json()
  return posts
}

const getAllMockPosts = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await req.json()
  return posts
}

export { getMockUsers, getMockPosts, getAllMockPosts }
