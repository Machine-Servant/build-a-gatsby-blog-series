import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="font-sans font-light">
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="my-8 text-4xl font-bold lg:text-5xl">My Gatsby Blog</h1>
        <span className="text-lg">This is my Gatsby Blog home page!</span>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
