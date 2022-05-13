import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from '../components/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

export default function Login() {
  return (
    <div className={styles.container}>
      <Layout>
        <>
          <div className="mainpic" style={{color: 'white', paddingTop: '120px', textAlign: 'center'}}>
          <h1 style={{fontSize: '50px'}}>Our Reviews</h1>
          <h2>Splinter is an awesome bot. Users agree!</h2>
          </div>
	  <div className="hometop">
    <div style={{display: 'flex', justifyContent: 'center'}}>
              <div className="card" style={{width: '30%'}}>
                <h1><span className="grey">"redoing review: </span> 69/69 <span className="grey">because bot is </span>epik af<span className="grey">"</span></h1>
                <p>∙ Law | ロー, from <strong>Splinter Support Server</strong></p>
              </div>

              <div className="card"  style={{width: '30%'}}>
                <h1><span className="grey">"Im gonna say </span>9/10<span className="grey">. It is a</span> Great bot has good all-round features. Would recommend.<span className="grey">"</span></h1>
                <p>∙ The One Bit Wonder, from <strong>Splinter Support Server</strong></p>
              </div>

      <div className="card"  style={{width: '30%'}}>
                <h2><span className="grey">"</span>10/10: <span className="grey">It has</span> alot of features <span className="grey">for a bot that is</span> always being worked on <span className="grey">and the</span> Owner and Support always are available to help out :)<span className="grey">"</span></h2>
                <p>∙ RByxle, from <strong>Splinter Support Server</strong></p>
              </div>
      
    </div>

      <h1 style={{paddingTop: '35px'}}><span style={{color: "#ffab19"}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span> Splinter&apos;s rated <strong>5/5</strong> on <a href="https://top.gg/bot/920207039043625030">Top.gg</a></h1>
      </div>
        </>
      </Layout>
      <Footer>
      </Footer>
    </div>
  )
}
