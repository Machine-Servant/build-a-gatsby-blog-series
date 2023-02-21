import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { components, MainContent } from '../components/mdx-components';
import { PageLayout } from '../components/page-layout';

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  const featuredImage = data.mdx?.frontmatter?.featuredImage
    ? getImage(data.mdx.frontmatter.featuredImage.childImageSharp)
    : null;

  return (
    <PageLayout
      image={featuredImage}
      title={data.mdx?.frontmatter?.title ?? undefined}
    >
      <MainContent>
        <div className="mb-8">
          <span className="text-sm font-thin">
            By {data.mdx?.frontmatter?.author} on {data.mdx?.frontmatter?.date}
          </span>
        </div>
        <MDXProvider components={components}>{children}</MDXProvider>
      </MainContent>
    </PageLayout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
