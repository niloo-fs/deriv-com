import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer } from '../components/_style'
import { StyledLinkButton } from './_trading-cfd-increases'
import { SectionContainer, Desktop, Mobile } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        margin_relationship_piechart: file(
            relativePath: { eq: "trade-types/margin-relationship-piechart.png" }
        ) {
            ...fadeIn
        }
        margin_mobile_relationship_piechart: file(
            relativePath: { eq: "trade-types/margin-mobile-relationship-piechart.png" }
        ) {
            ...fadeIn
        }
    }
`
const ImageWrapper = styled.div`
    width: 100%;
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding-bottom: 0;
    }
`

const MindWhenTrading = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="2rem">
                    <Localize translate_text="_t_Things to keep in mind when trading CFDs_t_" />
                </Header>
                <Text as="h4" size="var(--text-size-m)" weight="bold" mb="0.8rem">
                    <Localize translate_text="_t_CFDs are traded on margin_t_" />
                </Text>
                <Text mb="3.2rem">
                    <Localize translate_text="_t_The term ‘margin’ refers to the deposit needed to open a leveraged position, which is a position larger than your capital investment and leads to increased market exposure._t_" />
                </Text>
            </SmallContainer>
            <Desktop breakpoint={'bp680'}>
                <SmallContainer direction="column" ai="flex-start">
                    <ImageWrapper>
                        <QueryImage
                            data={data['margin_relationship_piechart']}
                            alt="Pie chart explaining relation between margin and leverage"
                        />
                    </ImageWrapper>
                </SmallContainer>
            </Desktop>
            <Mobile breakpoint={'bp680'}>
                <ImageWrapper>
                    <QueryImage
                        data={data['margin_mobile_relationship_piechart']}
                        alt="Trade types margin market"
                    />
                </ImageWrapper>
            </Mobile>
            <SmallContainer direction="column" ai="flex-start">
                <Text mt="3.2rem">
                    <Localize translate_text="_t_Use our margin calculator to calculate the margin required to increase your market exposure (the market value of your position) on Deriv’s CFD trading platforms._t_" />
                </Text>

                <StyledLinkButton mt="4rem" secondary to="/trader-tools/margin-calculator/">
                    <Localize translate_text="_t_Margin calculator_t_" />
                </StyledLinkButton>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default MindWhenTrading
