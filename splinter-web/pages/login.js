import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from '../components/layout.module.css'
import { getProviders, signIn } from "next-auth/react"

export default function Login() {
  return (
    <div className={styles.container}>
      <Layout>
        <>
          {signIn('discord')}
        </>
      </Layout>
      <Footer>
      </Footer>
    </div>
  )
}
