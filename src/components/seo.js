import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { DateTime } from "luxon"

function SEO({ fonts, canonicalUrl, description, lang, meta, title }) {
  const fontString = fonts
    ? fonts.reduce((acc, value) => {
        const family = `family=${value.replace(" ", "+")}`
        return acc === "" ? family : acc + `&${family}`
      }, "")
    : null

  const finalTitle =
    typeof title === "string" ? title : title.toLocaleString(DateTime.DATE_FULL)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={finalTitle}
      titleTemplate={`%s | Lateflip`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: finalTitle,
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
          content: finalTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    >
      {fontString && (
        <link
          href={`https://fonts.googleapis.com/css2?${fontString}&amp;display=swap`}
          rel="stylesheet"
        />
      )}
      {canonicalUrl && (
        <link
          rel="canonical"
          href={
            typeof canonicalUrl === "string"
              ? canonicalUrl
              : canonicalUrl.toFormat("/yyyy/LL/dd")
          }
        ></link>
      )}
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default SEO
