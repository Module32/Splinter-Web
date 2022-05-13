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
          <div className="mainpic" style={{color: 'white', paddingTop: '120px'}}>
          <h1>Terms of Service</h1>
          </div>
	  <div className="hometop">
    <h2>
      Anyone seen breaking tos can potentially be blacklisted from using Splinter.</h2>
	     <br />
        	- Do not use Splinter to attempt to offend anyone using .echo or .embed.<br /><br />
			- Do not try and do anything that could potentially prevent Splinter from working normally (e.g getting Splinter ratelimited etc)<br /><br />
			- Do not abuse glitches and exploits. If you find any, please report them to us via the support server.<br /><br />
			- Do not distribute information about an exploit or glitch publicly, as this could affect the bot negatively.<br />
    </div>
        </>
      </Layout>
      <Footer>
      </Footer>
    </div>
  )
}
