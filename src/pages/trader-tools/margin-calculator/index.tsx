import React from 'react'
import { Hero } from '../common/_style'
import MarginCalculatorSection from './_margin-calculator'
import { Container, PageDirection, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { TGatsbyHeadApi } from 'features/types'

const MarginCalculator = () => {
    return (
        <Layout>
            <PageDirection />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Margin Calculator_t_" />
                    </Header>
                </Container>
            </Hero>
            <MarginCalculatorSection />
        </Layout>
    )
}

export default WithIntl()(MarginCalculator)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        title="_t_Margin Calculator_t_"
        description="_t_Margin Calculator_t_"
        pageContext={pageContext}
    />
)
