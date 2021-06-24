import { useSession } from 'next-auth/client'
import styles from '../styles/createPost.module.scss'

// incorporate prisma

const CreatePost = ({ open }) => {
  console.log(open)
  const [session, loading] = useSession()
  // body:
  // location (google lat/lng coming...)
  // fish name
  // tackle used
  // time

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      fishName: { value: string }
      tackle: { value: string }
      location: { value: string }
      time: { value: Date }
    }

    const post = {
      fishName: target.fishName.value,
      tackle: target.tackle.value,
      location: target.location.value,
      time: target.time.value,
      uid: session.uid,
    }
    console.log(post)

    open(false)
  }

  return (
    <div className={styles.container}>
      <h2>Share Your Story</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <label>Type of Fish</label>
          <input id="fishName" />
        </div>
        <div className={styles.inputContainer}>
          <label>Tackle Used</label>
          <input id="tackle" />
        </div>
        <div className={styles.inputContainer}>
          <label>Location</label>
          <input id="location" />
        </div>
        <div className={styles.inputContainer}>
          <label>When</label>
          <input id="time" type="datetime-local" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
