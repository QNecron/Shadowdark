import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"

// import Data from "../../json/bestiary.json"

const Creator: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero
        theme="shaded"
        desktop="https://picsum.photos/1600/450"
        desktopH="540"
        desktopW="1920"
        tablet="https://picsum.photos/1024/384"
        tabletH="384"
        tabletW="1024"
        mobile="https://picsum.photos/480/480"
        mobileH="480"
        mobileW="480"
        alt="Shadowdark Hero"
        x="2"
        y="2"
        heading="Creator"
      />

    </Page>

  )

}

export default Creator

export const Head: HeadFC = () => <title>Creator</title>
