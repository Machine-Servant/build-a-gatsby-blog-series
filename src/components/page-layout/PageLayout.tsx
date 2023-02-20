import React from 'react';
import { PageFooter } from '../page-footer';
import { PageHeader } from '../page-header';

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="font-sans font-light">
      <PageHeader />
      <div className="mx-auto mb-12 max-w-5xl">{children}</div>
      <PageFooter />
    </main>
  );
};
