import React from "react"
import { Link, graphql } from "gatsby"
// import Layout from "../components/layout"
import Intro from "../components/Intro";
import { FadeInDiv } from "../components/animation";

const IndexPage = ({data}) => (
    <FadeInDiv>
      <Intro/>
    </FadeInDiv>
)


export const PageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage
