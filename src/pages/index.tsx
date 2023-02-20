import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import { PageLayout } from '../components/page-layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="mb-8 text-4xl font-bold lg:text-5xl">My Gatsby Blog</h1>
        <span className="text-lg">This is my Gatsby Blog home page!</span>
      </div>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
