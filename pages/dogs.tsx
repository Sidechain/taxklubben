import Head from 'next/head'
import { DogCard } from '../components/Cards/DogCard/DogCard'
import { NewsCard } from '../components/Cards/NewsCard/NewsCard'
import { PageWrapper } from '../components/common/PageWrapper/PageWrapper'
import { Page } from '../components/Page/Page'
import { colors } from '../styles/colors'

export default function Dogs() {
  return (
    <PageWrapper>
      <Head>
        <title>Taxklubben</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page wrap>
        <DogCard
          name="Garbo"
          breed="Strävhårig tax"
          kennel="Trollkraft"
          image="/images/dachshund.jpeg"
          alt="A small dachshund"
        />
        <DogCard
          name="Gaffa"
          breed="Grand danois"
          kennel="Malmös gator"
          image="/images/greatdane.jpeg"
          alt="A large black great dane"
        />
        <DogCard
          name="Garbo"
          breed="Strävhårig tax"
          kennel="Trollkraft"
          image="/images/dachshund.jpeg"
          alt="A small dachshund"
        />
        <DogCard
          name="Gaffa"
          breed="Grand danois"
          kennel="Malmös gator"
          image="/images/greatdane.jpeg"
          alt="A large black great dane"
        />
        <DogCard
          name="Garbo"
          breed="Strävhårig tax"
          kennel="Trollkraft"
          image="/images/dachshund.jpeg"
          alt="A small dachshund"
        />
        <DogCard
          name="Gaffa"
          breed="Grand danois"
          kennel="Malmös gator"
          image="/images/greatdane.jpeg"
          alt="A large black great dane"
        />
      </Page>
      <footer></footer>
    </PageWrapper>
  )
}
