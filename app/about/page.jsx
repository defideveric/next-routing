import Link from "next/link";
import Head from 'next/head';

export default function About() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>About</h1>
        <Link href='/'>Link to Home Page</Link>
      </main>
    </div>
    
  )
}
