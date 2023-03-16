import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"

import Data from "../../json/bestiary.json"

const IndexPage: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero
        theme="shaded"
        desktop="https://picsum.photos/1600/900"
        desktopH="1080"
        desktopW="1920"
        tablet="https://picsum.photos/1024/768"
        tabletH="768"
        tabletW="1024"
        mobile="https://picsum.photos/480/960"
        mobileH="960"
        mobileW="480"
        alt="Shadowdark Hero"
        x="2"
        y="2"
        logo="white"
      />

    </Page>

  )

}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
