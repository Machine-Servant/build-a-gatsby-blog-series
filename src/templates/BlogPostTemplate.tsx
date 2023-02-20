import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { components, MainContent } from '../components/mdx-components';
import { PageLayout } from '../components/page-layout';

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  return (
    <PageLayout>
      <MainContent>
        <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
          {data.mdx?.frontmatter?.title}
        </h1>
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
      }
    }
  }
`;
