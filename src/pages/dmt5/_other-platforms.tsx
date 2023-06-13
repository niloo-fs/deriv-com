import React from 'react'
import dxIcon from '../../images/svg/dmt5/dx-icon.svg'
import dtIcon from '../../images/svg/dmt5/dt-icon.svg'
import ezIcon from '../../images/svg/dmt5/ez-icon.svg'
import dGoIcon from '../../images/svg/dmt5/go-icon.svg'
import dbIcon from '../../images/svg/dmt5/db-icon.svg'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const carouselData: TRenderableData[] = [
    {
        icon: dtIcon,
        heading: '_t_Deriv Trader_t_',
        paragraph: '_t_Our flagship app for trading options and multipliers._t_',
        link: '/dtrader/',
    },
    {
        icon: dGoIcon,
        heading: '_t_Deriv GO_t_',
        paragraph: '_t_Our best trading experience on your mobile._t_',
        link: '/deriv-go/',
    },
    {
        icon: dxIcon,
        heading: '_t_Deriv X_t_',
        paragraph: '_t_The CFD trading platform to fit your style._t_',
        link: '/derivx/',
    },
    {
        icon: ezIcon,
        heading: '_t_Deriv EZ_t_',
        paragraph: '_t_Our mobile-first CFD trading platform._t_',
        link: '/deriv-ez/',
    },
    {
        icon: dbIcon,
        heading: '_t_Deriv Bot_t_',
        paragraph: '_t_Automate your trading. No coding required._t_',
        link: '/dbot/',
    },
]

const OurPlatforms = () => (
    <GenericCarousel
        renderableData={carouselData}
        mainHeading="_t_Check out our other platforms_t_"
    />
)

export default OurPlatforms
