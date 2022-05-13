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
      <header className={styles.header}>
          <>
          <ul>
            <div style={{display: 'flex'}}>
              <li><Link href="/">
                  <a className="navbar"><strong>Splinter</strong></a>
                </Link></li>
              
              <div style={{marginLeft: 'auto'}}>
                <li><Link href="https://discord.com/oauth2/authorize?client_id=920207039043625030&scope=bot%20applications.commands">
                  <a className="navbar">Invite</a>
                </Link></li>
                
                <li><Link href="/reviews">
                  <a className="navbar">Reviews</a>
                </Link></li>
    
                <li><Link href="https://discord.gg/rPH2Tv2C">
                  <a className="navbar">Support Server</a>
                </Link></li>

                <li><Link href="/faq">
                  <a className="navbar">FAQ</a>
                </Link></li>

                <li><Link href="/team">
                  <a className="navbar">Team</a>
                </Link></li>

                <li><Link href="/login">
                  <a className="thick">Login</a>
                </Link></li>
              </div>
            </div>
          </ul>
          </>
      </header>
      <div className={styles.card} style={{marginTop: '-20px', color: "black"}}><main>{children}</main></div>
    </div>

  )
}