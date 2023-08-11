import styles from './styles.module.css';

export const metadata = {
    title: 'About Page',
    description: 'Created by Next.js App',
}

export default function AboutLayout({ children }) {
    return (
        <>
            <nav>
                About NavBar
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
    
