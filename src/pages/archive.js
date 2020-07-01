import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from "luxon"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const ArchivePage = ({ data }) => {
  let pageTree = {}
  data.allJavascriptFrontmatter.edges
    .map(edge => {
      return { ...edge.node.frontmatter, luxonDate: DateTime.fromISO(edge.node.frontmatter.day) }
    })
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
    </Layout>
  )
}

export const query = graphql`
  query PagesFrontmatterQuery {
    allJavascriptFrontmatter {
      edges {
        node {
          frontmatter {
            error
            day
            subheadline
            url
          }
        }
      }
    }
  }
`

export default ArchivePage
