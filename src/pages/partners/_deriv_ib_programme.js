import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, TR, TC } from './_table.js'
import { Card, CardWrapper } from './_partner-card.js'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize } from 'components/localization'
import { Button } from 'components/form'
import device from 'themes/device'
import Chevron from 'images/svg/chevron.svg'

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;

    h4:last-child {
        margin-top: 1.6rem;
    }
`
const StyledSection = styled(SectionContainer)`
    box-shadow: ${props => (props.shadow ? '0 1px 0 0 rgba(0, 0, 0, 0.1)' : '')};
    padding-bottom: 0;
    text-align: ${props => props.align || 'left'};
`
const StyledHeader = styled(Header)`
    margin-bottom: ${props => (props.margin_bottom ? props.margin_bottom : '1.6rem')};

    @media ${device.tabletL} {
        text-align: center;
    }
`

const BackButton = styled(Button)`
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
`
const StyledText = styled(Text)`
    font-size: ${props => (props.font_size ? props.font_size : '1.4rem')};
    line-height: ${props => (props.lh ? props.lh : '1.14')};
    margin-bottom: ${props => props.margin_bottom || ''};
`

const HowItsCalculate = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1.6rem;
    border-top: 2px solid var(--color-grey-2);
`

const ButtonWrapper = styled.div`
    width: 100;
    display: flex;
    justify-content: flex-start;

    a:last-child {
        margin-left: 1.6rem;
    }
`
const DerivIBProgramme = () => {
    return (
        <StyledSection shadow>
            <Container direction="column">
                <TitleWrapper>
                    <Header font_size="3.6rem" align="center">
                        {localize('Deriv IB Programme')}
                    </Header>
                    <Header as="h4" align="center" weight="500">
                        {localize(
                            'Our IB programme is available to all Deriv affiliates. Earn commission from your clients’ trades on DMT5.',
                        )}
                    </Header>
                </TitleWrapper>
                <SectionContainer padding="8rem 0 9.6rem 0">
                    <StyledHeader as="h4">{localize('Choose a commission plan:')}</StyledHeader>
                    <CardWrapper mt="-2rem" wrap="wrap">
                        <IBPlan data={ib_dmt5} />
                    </CardWrapper>
                    <StyledSection padding="4rem 0 0 0" align="center">
                        <StyledHeader
                            as="h4"
                            align="center"
                            weight="500"
                            lh="1.5"
                            margin_bottom="2.6rem"
                        >
                            {localize('Can’t decide which programme or commission plan suits you?')}
                        </StyledHeader>
                        <Button secondary>{localize('Contact us')}</Button>
                    </StyledSection>
                </SectionContainer>
            </Container>
        </StyledSection>
    )
}

const StyledChevron = styled(Chevron)`
    width: 100%;
    margin-top: 0.8rem;
    height: 16px;
    cursor: pointer;
    transform: ${props => (props.is_expand ? 'inherit' : 'rotate(-180deg)')};
`

const StyledTR = styled(TR)`
    display: ${props => (props.hidden ? 'hidden' : 'block')};
`

const IBPlan = ({ data }) => {
    const [is_expand, setExpand] = React.useState(false)
    const [is_calculated, setCalculated] = React.useState(false)
    const max_expansion = 3
    const has_expansion = data.assets[0].length > max_expansion

    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    const toggleExpand = () => {
        setExpand(!is_expand)
    }
    return (
        <Card height={is_expand ? '76rem' : '42rem'} padding="3.2rem 3.2rem 8.2rem">
            <div>
                {!is_calculated ? (
                    <>
                        <Header as="h4" lh="1.5">
                            {data.name}
                        </Header>
                        <Text>{data.description}</Text>
                        <Table grid_col_number={data.assets.length} is_balance={true}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0 && idx === 0) {
                                            return (
                                                <TR isTitle="true">
                                                    <StyledText weight="bold" lh="2.2">
                                                        {item}
                                                    </StyledText>
                                                </TR>
                                            )
                                        } else if (idxa === 0) {
                                            return (
                                                <TR isTitle="true">
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TR>
                                            )
                                        } else if (idxa > max_expansion) {
                                            return (
                                                <StyledTR key={idxa} hidden={!is_expand}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        } else {
                                            return (
                                                <StyledTR key={idxa}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        }
                                    })}
                                </TC>
                            ))}
                        </Table>
                        {has_expansion && (
                            <StyledChevron onClick={toggleExpand} is_expand={is_expand} />
                        )}
                        <HowItsCalculate>
                            <Button flat onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </Button>
                        </HowItsCalculate>
                    </>
                ) : (
                    <>
                        <Header as="h4" lh="1.5">
                            {localize('How it’s calculated')}
                        </Header>
                        {data.calculation}
                        <ButtonWrapper>
                            <Button secondary>{localize('Become an affiliate')}</Button>
                            <BackButton tertiary>{localize('Back')}</BackButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </Card>
    )
}

const ib_dmt5 = {
    name: localize('DMT5 Synthetic Indices'),
    description: localize('Earn when your customers trade on a DMT5 Synthetic account'),
    assets: [
        [
            localize('Asset'),
            localize('Crash 500 Index'),
            localize('Crash 1000 Index'),
            localize('Boom 500 Index'),
            localize('Boom 1000 Index'),
            localize('Volatility 10 Index'),
            localize('Volatility 25 Index'),
            localize('Volatility 50 Index'),
            localize('Volatility 75 Index'),
            localize('Volatility 100 Index'),
            localize('HF Volatility 10 Index'),
            localize('HF Volatility 50 Index'),
            localize('HF Volatility 100 Index'),
            localize('Step Index'),
        ],
        [
            localize('Commission per round trade (per USD 100k)'),
            localize('0.30'),
            localize('0.20'),
            localize('0.30'),
            localize('0.20'),
            localize('1.50'),
            localize('3.50'),
            localize('7.50'),
            localize('10.00'),
            localize('15.00'),
            localize('1.50'),
            localize('7.50'),
            localize('15.00'),
            localize('0.20'),
        ],
    ],
    calculation: (
        <>
            <Text>
                {localize(
                    'For example, a round trade of 1 lot of the Volatility 75 Index for a price of USD 125,000 would pay out USD 12.5 in commission based on the following formula: ',
                )}
            </Text>
            <Text weight="bold" margin="2.5rem 0">
                {localize('USD 10 X 1 lot X USD 125,000 / 100,000 = USD 12.5')}
            </Text>
            <StyledText font_size="var(--text-size-s)" lh="1.5" margin_bottom="2.4rem">
                {localize(
                    'If your account currency is in euro or pound sterling, your commission will be converted based on the latest exchange rate.',
                )}
            </StyledText>
        </>
    ),
}

IBPlan.propTypes = {
    data: PropTypes.object,
}

export default DerivIBProgramme
