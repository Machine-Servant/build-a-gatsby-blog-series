import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

export const PageFooter: React.FC = () => {
  const { title, navigation } = useSiteMetadata();

  return (
    <footer className="bg-purple-200">
      <div className="container mx-auto flex max-w-5xl flex-col justify-evenly py-12 sm:flex-row">
        <div className="mb-12 sm:mb-0">
          {title && (
            <div className="mb-4 flex items-center justify-center gap-4 sm:-ml-6">
              <StaticImage
                className="inline-block"
                layout="fixed"
                height={20}
                width={20}
                src="../../images/icon.png"
                alt={title}
              />
              <span className="text-xl font-bold uppercase text-black">
                {title}
              </span>
            </div>
          )}
        </div>
        <div className="text-center sm:text-left">
          <ul className="flex flex-col items-center gap-4 sm:flex-row">
            {navigation?.map(
              (nav) =>
                nav?.path && (
                  <li key={nav.path}>
                    <Link className="underline" to={nav.path}>
                      {nav.name}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};
