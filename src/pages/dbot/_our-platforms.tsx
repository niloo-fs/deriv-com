import React from 'react'
import mt5Icon from '../../images/svg/dbot/mt5.svg'
import goIcon from '../../images/svg/dbot/go-icon.svg'
import ezIcon from '../../images/svg/dbot/ez-icon.svg'
import dxIcon from '../../images/svg/dbot/dx-icon.svg'
import dtIcon from '../../images/svg/dbot/dt-icon.svg'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const carouselData: TRenderableData[] = [
    {
        icon: mt5Icon,
        heading: '_t_Deriv MT5_t_',
        paragraph: '_t_The all-in-one CFD trading platform._t_',
        link: '/dmt5/',
    },
    {
        icon: dtIcon,
        heading: '_t_Deriv Trader_t_',
        paragraph: '_t_Our flagship app for trading options and multipliers._t_',
        link: '/dtrader/',
    },
    {
        icon: goIcon,
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
]

const OurPlatforms = () => (
    <GenericCarousel
        renderableData={carouselData}
        mainHeading="_t_Check out our other platforms_t_"
    />
)

export default OurPlatforms
