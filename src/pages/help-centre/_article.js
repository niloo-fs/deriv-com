import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DidntFindYourAnswerBanner } from './_didnt-find-answer'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { SideTab, StyledLink } from 'components/elements'
import { Container } from 'components/containers'

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
const TabWrapper = styled.div`
    width: 100%;
    margin-top: 8rem;
`
const ContactContainer = styled.div`
    margin-top: 8rem;
`
export const Article = ({ children, header }) => {
    return (
        <Layout>
            <Container align="left" justify="flex-start" direction="column">
                <StyledLink
                    to="/help-centre/"
                    has_arrow="true"
                    color="black"
                    size="var(--text-size-s)"
                    weight="bold"
                    arrow_margin="1rem"
                    margin="4rem 0"
                >
                    {localize('Back')}
                </StyledLink>
                <Content>
                    <TabWrapper>
                        <SideTab
                            has_hash_routing
                            tab_header={header}
                            font_size="var(--text-size-s)"
                        >
                            {children}
                        </SideTab>
                    </TabWrapper>
                </Content>
            </Container>

            <ContactContainer>
                <DidntFindYourAnswerBanner />
            </ContactContainer>
        </Layout>
    )
}

Article.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
}
