import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from 'themes/global-style'
import { isBrowser } from 'common/utility'

export const LocaleContext = React.createContext()

export const LocaleContextWrapper = ({ children, pageContext: { locale } }) => {
    const [has_window_loaded, setWindowLoaded] = React.useState(false)

    React.useEffect(() => {
        if (isBrowser()) {
            window.addEventListener('load', () => setWindowLoaded(true))
        }
    }, [])

    return (
        <LocaleContext.Provider value={{ locale, has_window_loaded }}>
            <GlobalStyle />
            {children}
        </LocaleContext.Provider>
    )
}

LocaleContextWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    pageContext: PropTypes.shape({
        locale: PropTypes.string,
    }),
}

// Language passed here from createPages
export const WrapPagesWithLocaleContext = ({ element, props }) => {
    return <LocaleContextWrapper {...props}>{element}</LocaleContextWrapper>
}

WrapPagesWithLocaleContext.propTypes = {
    element: PropTypes.element.isRequired,
    props: PropTypes.object,
}
