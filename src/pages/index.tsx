import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"

const IndexPage: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero
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
        heading="Shadowdark"
        copy="Something here."
      />

    </Page>

  )

}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
