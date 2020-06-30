import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from "luxon"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const ArchivePage = ({ data }) => {
  let pageTree = {}
  data.allSitePage.edges
    .reduce((filtered, edge) => {
      if (/\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\//.exec(edge.node.path)) {
        const iso8601 = edge.node.path.slice(1, -1).replace(/\//g, "-")
        filtered.push({
          url: edge.node.path,
          luxonDate: DateTime.fromISO(iso8601),
        })
      }
      return filtered
    }, [])
    .sort((a, b) => {
      return a.luxonDate > b.luxonDate
    })
    .forEach(page => {
      if (!pageTree[page.luxonDate.year]) {
        pageTree[page.luxonDate.year] = {
          [page.luxonDate.month]: [page],
        }
      } else if (!pageTree[page.luxonDate.year][page.luxonDate.month]) {
        pageTree[page.luxonDate.year][page.luxonDate.month] = [page]
      } else {
        pageTree[page.luxonDate.year][page.luxonDate.month].push(page)
      }
    })

  return (
    <Layout archive={true}>
      <SEO title="Archive" />
      <h1>Archive</h1>
      <p>Welcome to the archive</p>

      <ol style={{ listStyle: "none" }}>
        {Object.keys(pageTree).map(year => {
          return (
            <li key={year}>
              {year}
              <ol style={{ listStyle: "none" }}>
                {Object.keys(pageTree[year]).map(month => {
                  return (
                    <li key={month}>
                      {month}
                      <ol style={{ listStyle: "none" }}>
                        {pageTree[year][month].map(page => {
                          return (
                            <li key={page.luxonDate.day}>
                              <Link to={page.url}>
                                {page.luxonDate.toLocaleString(
                                  DateTime.DATE_HUGE
                                )}
                              </Link>
                            </li>
                          )
                        })}
                      </ol>
                    </li>
                  )
                })}
              </ol>
            </li>
          )
        })}
      </ol>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`

export default ArchivePage
