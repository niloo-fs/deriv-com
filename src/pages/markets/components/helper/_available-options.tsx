import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

type AvailableOptionsProps = {
    description:
        | TString
        | {
              text: TString
              components?: React.ReactElement[]
          }
    mobile_pt?: string
    remove_title?: boolean
    svg: string
    title?: TString
}

const StyledFlex = styled(Flex)<{ mobile_pt: string }>`
    flex-direction: column;

    @media ${device.tabletL} {
        padding-top: ${({ mobile_pt }) => (mobile_pt ? mobile_pt : '')};
    }
`

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const Icon = styled.img`
    margin-right: 1.6rem;
    width: 80px;
    height: 80px;

    @media ${device.tabletL} {
        width: 60px;
        height: 60px;
    }
`

const AvailableOptions = ({
    title,
    description,
    remove_title,
    svg,
    mobile_pt,
}: AvailableOptionsProps) => {
    return (
        <StyledFlex mobile_pt={mobile_pt}>
            {!remove_title && (
                <Box mb="0.8rem" height="2.4rem">
                    <StyledText weight="bold">
                        {title ? <Localize translate_text={title} /> : null}
                    </StyledText>
                </Box>
            )}
            <Flex jc="flex-start">
                <Icon src={svg} />
                <Box max_width="28.8rem">
                    <StyledText>
                        {typeof description === 'object' ? (
                            <Localize
                                translate_text={description.text}
                                components={description.components}
                            />
                        ) : (
                            <Localize translate_text={description} />
                        )}
                    </StyledText>
                </Box>
            </Flex>
        </StyledFlex>
    )
}

export default AvailableOptions
