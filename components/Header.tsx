import styles from '../styles/header.module.css'
const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo}
                    src="https://lh3.googleusercontent.com/proxy/N61p0I5JfhR1AmnQv3kY0u6KR3OB6aamny45RnrBfbAWgwNKwuvliNvgot3Cyyd6jLYF-xG6b3SIgt4G8BMKjeOv8Xvx-8IT1sSJ3bQ7rpDsXK-4VD7hllR_ReXGqgf6RAs6iIsijfCt1OeySWKCiIK_" 
                    alt="mft_logo" 
                    />
                <h1>Midwest Fish Talk</h1>
            </div>
            <h2>USERNAME??</h2>
        </header>
    )
}

export default Header