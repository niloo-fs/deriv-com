import React from 'react'
import mt5Icon from '../../images/svg/dtrader/mt5.svg'
import goIcon from '../../images/svg/dtrader/go-icon.svg'
import ezIcon from '../../images/svg/dtrader/ez-icon.svg'
import dxIcon from '../../images/svg/dtrader/dx-icon.svg'
import dbIcon from '../../images/svg/dtrader/db-icon.svg'
import GenericCarousel, { TRenderableData } from 'components/custom/carousel/_platforms-carousel'

const carouselData: TRenderableData[] = [
    {
        icon: mt5Icon,
        heading: '_t_Deriv MT5_t_',
        paragraph: '_t_The all-in-one CFD trading platform._t_',
        link: '/dmt5/',
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
