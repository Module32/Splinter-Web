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
          <h1>Privacy Policy</h1>
          </div>
	  <div className="hometop">
    <h2>
      This is information on how we keep your data as a user, and what we do with it.</h2>
	     <br />
        	- Your data is not used at all, and the only data we keep is data that is required for the bot to function (e.g how much messages you send in a server for premium’s giveaway feature, your welcome messages etc)<br /><br />
			- We keep this data in a database, and it is deleted when it is not needed.<br /><br />
			- Clearing your welcome messages (.wm_clear etc) deletes the data we have of it completely and is no longer used.<br /><br />
			- We do not store anything else other than what we need, and what you enter into your commands for the bot to function how you need it for your server.<br /><br />
		  	- Guild logs are included in the bot. Guilds may be able to see message deletion, message edit, etc if they have it enabled. If you want to see if it is enabled, run .settings or you can ask us in the Splinter Support Server.
    </div>
        </>
    </Layout>
      <Footer>
      </Footer>
    </div>
  )
}
