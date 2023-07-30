import React from 'react'
import { Hero } from '../common/_style'
import SwapCalculatorSection from './_swap-calculator'
import { Container, PageDirection, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { TGatsbyHeadApi } from 'features/types'

const SwapCalculator = () => {
    return (
        <Layout>
            <PageDirection />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Swap Calculator_t_" />
                    </Header>
                </Container>
            </Hero>
            <SwapCalculatorSection />
        </Layout>
    )
}

export default WithIntl()(SwapCalculator)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        title="_t_Swap Calculator_t_"
        description="_t_Swap Calculator_t_"
        pageContext={pageContext}
    />
)
