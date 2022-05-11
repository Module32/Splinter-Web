import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react"
import styles from './layout.module.css'

const name = 'Module64'
export const siteTitle = 'Open Terminal'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <footer>
        <footer style={{paddingBottom: '40px'}}>
        <div style={{display: 'flex'}}>
          <h2>Splinter Team<br /><span className="grey" style={{fontSize: '18px'}}>Founded with ❤️ by Callum Knott<br />©{(new Date().getFullYear())} | All rights reserved.</span></h2>
          <div style={{marginLeft: 'auto', display: 'flex'}}>
            <div className="totheleft" style={{flexDirection: 'row'}}>
              <h3>Pages</h3>
              <h4 style={{marginTop: '-10px'}}><a href="/" className="footer">Home</a><br /><a href="/team" className="footer">Team</a><br /><a href="/partners" className="footer">Partners</a></h4>
            </div>
            <div className="totheleft" style={{flexDirection: 'row'}}>
              <h3>Bot</h3>
              <h4 style={{marginTop: '-10px'}}><a href className="footer">Invite</a><br /><a href="https://discord.gg/Phhtaycvjw" className="footer">Support</a></h4>
            </div>
            <div className="totheleft" style={{flexDirection: 'row'}}>
              <h3>Legal</h3>
              <h4 style={{marginTop: '-10px'}}><a href="/privacypolicy" className="footer">Privacy Policy</a><br /><a href="/tos" className="footer">TOS</a></h4>
            </div>
          </div>
        </div>
        <hr style={{margin: 3}} />
        <p className="grey" style={{paddingTop: '15px', margin: 0}}>Reach out to us through <span><a href="https://discord.gg/Phhtaycvjw" className="social">Discord</a></span></p>
        <div style={{display: 'flex'}}>
        </div>
      </footer>
      </footer>
    </div>

  )
}