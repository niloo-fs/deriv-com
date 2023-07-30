import React from 'react'
import DepartmentPage from '../_dept-layout-components/_department-page'
import career_data from '../data/_career-data'
import { PageDirection, SEO } from 'components/containers'
import { WithIntl } from 'components/localization'
import { TGatsbyHeadApi } from 'features/types'

const Career2 = () => {
    return (
        <>
            <PageDirection />
            <DepartmentPage data={career_data.internal_audit[0]} />
        </>
    )
}

export default WithIntl()(Career2)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        title="Deriv Careers | Internal audit jobs"
        description="See job vacancies in Deriv’s Internal audit team. Join and grow with us."
        pageContext={pageContext}
    />
)
