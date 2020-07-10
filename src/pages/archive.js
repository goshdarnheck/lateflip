import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from "luxon"
import { dateFromUrl } from "../lib/utils"

import Layout, { fonts } from "../layouts/archive"
import SEO from "../components/seo"

const ArchiveMonth = ({ month, year, pages }) => {
  const endDate = DateTime.fromObject({ month, year }).endOf("month")
  let date = DateTime.fromObject({ month, year, day: 1 }).startOf("week")
  let days = []

  while (!date.hasSame(endDate.plus({ days: 1 }), "day")) {
    const key = date.toFormat("dL")

    if (date.month !== endDate.month) {
      days.push(<span key={key}></span>)
    } else if (pages[date.day]) {
      days.push(
        <span key={key}>
          <Link
            to={pages[date.day].url}
            title={`${pages[date.day].subheadline} - ${date.toLocaleString(
              DateTime.DATE_HUGE
            )}`}
          >
            {date.toFormat("d")}
          </Link>
        </span>
      )
    } else {
      days.push(<span key={key}>{date.toFormat("d")}</span>)
    }

    date = date.plus({ days: 1 })
  }

  return (
    <div>
      <h3>
        {DateTime.fromObject({
          month: month,
          year: year,
          day: 1,
        }).toFormat("LLLL")}
      </h3>
      <div className="calendar">{days}</div>
    </div>
  )
}

const ArchivePage = ({ data }) => {
  let pageTree = {}

  data.allJavascriptFrontmatter.edges
    .map(edge => {
      const isoDate = dateFromUrl(edge.node.frontmatter.url)

      return {
        ...edge.node.frontmatter,
        luxonDate: DateTime.fromISO(isoDate),
      }
    })
    .sort((a, b) => {
      return a.luxonDate > b.luxonDate
    })
    .forEach(page => {
      if (!pageTree[page.luxonDate.year]) {
        pageTree[page.luxonDate.year] = {
          [page.luxonDate.month]: {
            [page.luxonDate.day]: page,
          },
        }
      } else if (!pageTree[page.luxonDate.year][page.luxonDate.month]) {
        pageTree[page.luxonDate.year][page.luxonDate.month] = {
          [page.luxonDate.day]: page,
        }
      } else {
        pageTree[page.luxonDate.year][page.luxonDate.month][
          page.luxonDate.day
        ] = page
      }
    })

  return (
    <Layout subheadline="Archive">
      <SEO
        fonts={fonts}
        title="Archive"
        description="The vast archives of the Lateflip Skateboarding Website. Pages of links to things about skateboarding."
      />
      <div className="archive">
        <ul className="archive__years">
          {Object.keys(pageTree).map(year => (
            <li key={year}>
              <h2>{year}</h2>
              <ul className="archive__months">
                {Object.keys(pageTree[year]).map(month => (
                  <li key={month}>
                    <ArchiveMonth
                      month={month}
                      year={year}
                      pages={pageTree[year][month]}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
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
            subheadline
            url
          }
        }
      }
    }
  }
`

export default ArchivePage
