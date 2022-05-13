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
          <h1>Splinter&apos;s Awesome Team</h1>
          </div>
          <div className="hometop" style={{textAlign: 'left'}}>
           <div>
        <div style={{display: 'flex'}}>
          <div style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7)), url("/imgs/pfps/callumpfp.png")'}} className="card2">
            <div style={{display: 'flex'}}>
              <a href="https://discordhub.com/profile/581610266400391218" className="cardlink" style={{marginLeft: '-5px'}}><i className="fab fa-discord" /></a>
            </div>
            <h1 style={{paddingTop: '100px'}}>Callum Knott</h1>
            <p style={{marginTop: '-10px'}}>Founder and Creator of Splinter. Developer and database manager.</p>
          </div>
          <div style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7)), url("/imgs/pfps/module64.jpg")'}} className="card2">
            <div style={{display: 'flex'}}>
              <a href="https://discordhub.com/profile/804777320123990108" className="cardlink" style={{marginLeft: '-5px'}}><i className="fab fa-discord" /></a>
              <a href="https://github.com/Module32" className="cardlink" style={{}}><i className="fab fa-github" /></a>
              <a href="https://open.spotify.com/user/sjzp5yhvh08bsislhtby8jd1w" className="cardlink" style={{}}><i className="fab fa-spotify" /></a>
            </div>
            <h1 style={{paddingTop: '100px'}}>Module64</h1>
            <p style={{marginTop: '-10px'}}>Web & Splinter developer</p>
          </div>
          <div style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7)), url("/imgs/pfps/j4k3.jpeg")'}} className="card2">
            <div style={{display: 'flex'}}>
              <a href="https://discordhub.com/profile/758085367097327697" className="cardlink" style={{marginLeft: '-5px'}}><i className="fab fa-discord" /></a>
              <a href="https://github.com/Jacego100" className="cardlink" style={{}}><i className="fab fa-github" /></a>
            </div>
            <h1 style={{paddingTop: '100px'}}>('J4k3')</h1>
            <p style={{marginTop: '-10px'}}>2nd web developer for Splinter</p>
          </div>
          <div style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7)), url("/imgs/pfps/JamieImg.gif")'}} className="card2">
            <div style={{display: 'flex'}}>
              <a href="https://discordhub.com/profile/319960850712494080" className="cardlink" style={{marginLeft: '-5px'}}><i className="fab fa-discord" /></a>
              <a href="https://github.com/ParallaxOnline" className="cardlink" style={{}}><i className="fab fa-github" /></a>
            </div>
            <h1 style={{paddingTop: '100px'}}>JamieTheAdmin</h1>
            <p style={{marginTop: '-10px'}}>Gives Good Solutions To Problems.<br />Owns Free Bot Host: <a href="https://discord.gg/BzF796dfbn">Wumpus.Host</a></p>
            <h5>Problems with Joining?<br />Contact <span style={{color: '#001AFF'}}>Callum Knott#6969</span></h5>
          </div>
        </div></div>
          </div>
        </>
      </Layout>
      <Footer>
      </Footer>
    </div>
  )
}
