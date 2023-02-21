import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { PageLayout } from '../components/page-layout';

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  const headerImage = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;

  return (
    <PageLayout image={headerImage} title="Blog">
      <ul className="mx-auto max-w-3xl p-4 sm:p-0">
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id} className="mb-4 h-72 last-of-type:mb-0">
            <Link
              to={`/blog/${node.frontmatter?.slug}`}
              className="flex items-center overflow-hidden rounded-lg border border-gray-400"
            >
              <div className="flex-1 md:h-72 md:w-64">
                {node.frontmatter?.featuredImage && (
                  <GatsbyImage
                    image={
                      getImage(node.frontmatter.featuredImage.childImageSharp)!
                    }
                    alt=""
                    className="h-full w-full"
                  />
                )}
              </div>
              <div className="flex-1 p-6">
                <h2 className="mb-4 text-xl font-bold">
                  {node.frontmatter?.title}
                </h2>
                <span className="mb-2 block text-sm font-thin">
                  By {node.frontmatter?.author} on {node.frontmatter?.date}
                </span>
                <span className="block text-lg">{node.excerpt}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage {
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
