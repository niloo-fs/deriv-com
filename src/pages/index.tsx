import React from 'react'
import type { HeadProps } from 'gatsby'
import type { PageContextType } from 'features/types'
import { WithIntl, localize } from 'components/localization'
import HomePage from 'features/pages/home'
import { SEO } from 'components/containers'

const Home = () => {
    return <HomePage />
}

export default WithIntl()(Home)

export function Head({ pageContext }: HeadProps<object, PageContextType>) {
    return (
        <SEO
            title={localize(
                '_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_',
            )}
            description={localize(
                '_t_Deriv: an online trading platform available 24/7 with a wide selection of derivatives._t_',
            )}
            has_organization_schema
            pageContext={pageContext}
        />
    )
}
