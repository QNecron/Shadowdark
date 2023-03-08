import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Page from "../components/page/page"
import Hero from "../components/hero/hero"

const IndexPage: React.FC<PageProps> = () => {

  return (

    <Page>

      <Hero heading1="Shadowdark" copy1="Something here." />

    </Page>

  )

}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
