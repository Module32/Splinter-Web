import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from '../components/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

export default function Home() {
  let topbottom = "300px";
  let img = "70px";
  return (
    <div className={styles.container}>
      <Layout>
        <>
          <div className="mainpic" style={{paddingTop: topbottom, paddingBottom: topbottom, borderBottomLeftRadius: '10%',
  borderBottomRightRadius: '10%', color: 'white'}}>
            <h1 style={{fontWeight: 700, fontSize: '4.5vw', margin: 0}}>The Discord bot that can <span className="cursive" style={{color: "#8b87ff"}}>do more</span>.</h1>
            <h2 style={{fontWeight: '600'}}>Splinter is a highly capable multipurpose bot with a huge list of features, so you only need one bot for all your servers!<br /><br /><a href="https://discord.com/oauth2/authorize?client_id=920207039043625030&scope=bot%20applications.commands" className="thick">Invite Now</a></h2>
          </div>
          <div style={{textAlign: 'center', paddingTop: '20px'}}>
            <h1><span style={{color: "#ffab19"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span> Rated <a href="https://top.gg/bot/920207039043625030">5/5 on Top.gg</a></h1>
          <p>Learn more about some of the features that our users love!</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div className="card">
                <h2>Hi</h2>
              </div>
            </div>
          </div>
          <div className="hometop">
            <div className="infocard">
              <Image
                src="/imgs/home/1.png"
                width="1028"
                height="762"
                />
              <h1><span style={{padding: '5px', borderRadius: '5px', backgroundColor: '#29d1ff', color: 'white'}}>🥳 Extensive Giveaway System</span><br /><p style={{fontSize: '18px', fontWeight: '600'}}>Splinter&apos;s giveaway module is by far the most capable one on Discord. With various features such as rerolling, adding bonus entires, message requirements, and more!</p></h1>
            </div>
            
            <div className="infocard">
              <Image
                src="/imgs/home/2.png"
                width="1252"
                height="788"
                />
              <h1><span style={{padding: '5px', borderRadius: '5px', backgroundColor: '#29d1ff', color: 'white'}}>🥾 Powerful Moderation Tools</span><br /><p style={{fontSize: '18px', fontWeight: '600'}}>Level up your server&apos;s moderation tools with Splinter. A wide variety of commands like <span className="tag">kick</span>, <span className="tag">mute</span>, <span className="tag">purge</span>, and more all help you moderate your server with efficiency and ease!</p></h1>
            </div>

            <div className="infocard">
              <Image
                src="/imgs/home/3.png"
                width="590"
                height="778"
                />
              <h1><span style={{padding: '5px', borderRadius: '5px', backgroundColor: '#29d1ff', color: 'white'}}>😜 All Things Fun!</span><br /><p style={{fontSize: '18px', fontWeight: '600'}}>Looking to bring some fun into your server! Splinter has you covered with all sorts of interesting and cool commands to boost user activity and satisfaction!</p></h1>
            </div>
            
          </div>

          <div className="background banner" style={{textAlign: 'center'}}>
            <h1>Ready to invite Splinter?</h1>
            <h2><a href="https://discord.com/oauth2/authorize?client_id=920207039043625030&scope=bot%20applications.commands" className="thick">Let&apos;s go!</a></h2>
          </div>
        </>
      </Layout>
      <Footer>
      </Footer>
    </div>
  )
}