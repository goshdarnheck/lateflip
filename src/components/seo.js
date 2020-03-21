import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ fonts, canonicalUrl, description, lang, meta, title }) {
  const fontString = fonts ? fonts.join("|").replace(" ", "+") : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | lateflip`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `goshdarnheck`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    >
      {fontString && (
        <link
          href={`https://fonts.googleapis.com/css?family=${fontString}&amp;display=swap`}
          rel="stylesheet"
        />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl}></link>}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
