import React from 'react'
import mt5Icon from '../../images/svg/deriv-go/mt5.svg'
import dtIcon from '../../images/svg/deriv-go/dt-icosn.svg'
import ezIcon from '../../images/svg/deriv-go/ez-icon.svg'
import dxIcon from '../../images/svg/deriv-go/dx-icon.svg'
import dbIcon from '../../images/svg/deriv-go/db-icon.svg'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const carouselData: TRenderableData[] = [
    {
        icon: mt5Icon,
        heading: '_t_Deriv MT5_t_',
        paragraph: '_t_The all-in-one CFD trading platform._t_',
        link: '/dmt5/',
    },
    {
        icon: dxIcon,
        heading: '_t_Deriv X_t_',
        paragraph: '_t_The CFD trading platform to fit your style._t_',
        link: '/derivx/',
    },
    {
        icon: dtIcon,
        heading: '_t_Deriv Trader_t_',
        paragraph: '_t_Our flagship app for trading options and multipliers._t_',
        link: '/dtrader/',
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
