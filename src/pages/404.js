import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: página não encontrada" />
    <h1>404: página não encontrada</h1>
    <p>Não conseguimos encontrar a página que procura.</p>
  </Layout>
)

export default NotFoundPage
