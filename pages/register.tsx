import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'
import { Page } from '../components/Page/Page'
import { colors } from '../styles/colors'
import { borderRadius } from '../styles/constants'

export const Register = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Head>
        <title>Taxklubben</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <div
          style={{
            height: '100%',
            backgroundColor: colors.primaryKey,
            color: colors.primaryOn,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderRadius: borderRadius,
            padding: '0.5rem',
          }}
        >
          <span>Här tar vi emot anmälningar till tävlingarna</span>
        </div>
      </Page>
    </div>
  )
}

export default Register
