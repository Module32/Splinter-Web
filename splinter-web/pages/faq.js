import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from '../components/layout.module.css'
import { getProviders, signIn } from "next-auth/react"
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: <span>Wait, what exactly <strong>is</strong> Splinter?</span>,
            content: <span>Splinter is a multi-purpose bot designed for Discord servers. It supports a multitude of features such as creating giveaways for your users, moderating inappopriate activity, and many fun commands, with more modules coming!</span>,
        },
        {
            title: <span>How can I invite Splinter?</span>,
            content: <span>There&apos;s an invite link in the navbar as well the footer, but in case those aren&apos;t showing up on your screen, click <a href="https://discord.com/oauth2/authorize?client_id=920207039043625030&scope=bot%20applications.commands">here</a>!</span>,
        },
      {
            title: <span>I&apos;m experiencing problems or have feedback. Where can I contact the devs?</span>,
            content: <span>Join our <a href="https://discord.gg/rPH2Tv2C">support server</a>!</span>,
        },
      {
            title: <span>Nice bot! Where can I support it?</span>,
            content: <span>Thanks for your support! You can vote for us at <a href="https://top.gg/bot/920207039043625030">Top.gg</a> or get <a href="https://www.patreon.com/SplinterBot">Splinter Premium</a> for a low monthly price.</span>,
        },
      {
            title: <span>Who made this bot?</span>,
            content: <span>Splinter was founded by <strong>Callum Knott</strong>, with <strong>Hurb, J4K3,</strong> and <strong>Module64</strong> joining the development team later. Module also developed this website.</span>,
        },
      {
            title: <span>Splinter isn&apos;t responding to me. What&apos;s going on?</span>,
            content: <span>It&apos;s possible Splinter has suffered an outage or is being updated with sweet new features by the developers. Join the <a href="https://discord.gg/rPH2Tv2C">support server</a> to get updates on recent updates/issues!</span>,
        },
      {
            title: <span>🍪 May I have a cookie?</span>,
            content: <span><a href="https://en.wikipedia.org/wiki/HTTP_cookie">Sure!</a></span>,
        },
    ],
};

const faqstyles = {
    bgColor: 'none',
    titleTextColor: "gray",
    rowTitleColor: "black",
    rowContentPaddingBottom: '10px',
    transitionDuration: "0.2s",
};

const config = {
    animate: true,
    tabFocus: false
};

export default function Login() {
  return (
    <div className={styles.container}>
      <Layout>
        <>
          <div className="mainpic" style={{color: 'white', paddingTop: '120px'}}>
          <h1>Splinter FAQ</h1>
          </div>
          <div className="hometop" style={{textAlign: 'left'}}>
            <Faq
                data={data}
                styles={faqstyles}
                config={config}
            />
          </div>
        </>
      </Layout>
      <Footer>
      </Footer>
    </div>
  )
}
