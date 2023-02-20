import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import { PageLayout } from '../components/page-layout';

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  return (
    <PageLayout>
      <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl">Blog</h1>
      <ul className="mx-auto max-w-3xl p-4 sm:p-0">
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id} className="mb-4 last-of-type:mb-0">
            <Link
              to={`/blog/${node.frontmatter?.slug}`}
              className="block rounded-lg border border-gray-400 p-6"
            >
              <h2 className="mb-4 text-xl font-bold">
                {node.frontmatter?.title}
              </h2>
              <span className="mb-2 block text-sm font-thin">
                By {node.frontmatter?.author} on {node.frontmatter?.date}
              </span>
              <span className="block text-lg">{node.excerpt}</span>
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
          }
        }
      }
    }
  }
`;
