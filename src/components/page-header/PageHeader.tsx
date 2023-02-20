import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

export const PageHeader: React.FC = () => {
  const { title, navigation } = useSiteMetadata();

  return (
    <header className="bg-white">
      <div className="container mx-auto flex max-w-5xl items-center justify-between py-6">
        {title && (
          <Link
            to="/"
            className="flex items-center gap-2 px-4 sm:w-auto sm:pb-0 lg:px-0"
          >
            <StaticImage
              src="../../images/icon.png"
              alt={title}
              layout="fixed"
              height={35}
              width={35}
            />
            <span className="whitespace-nowrap text-xl font-bold uppercase">
              {title}
            </span>
          </Link>
        )}
        <nav className="flex w-full items-center justify-between text-sm sm:w-auto">
          <ul className="flex justify-between px-2 sm:px-0">
            {navigation?.map(
              (nav) =>
                nav?.path && (
                  <li key={nav.path} className="px-2 sm:px-4">
                    <Link to={nav.path}>{nav.name}</Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
