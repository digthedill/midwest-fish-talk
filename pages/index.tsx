import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1526625361769-ab16cb89b155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
        alt="fishing in the midwest"
      />
      <h1>Midwest Fish Talk</h1>
    </div>
  )
}

export default Home