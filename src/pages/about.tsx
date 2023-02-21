import { graphql, HeadFC, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { PageLayout } from '../components/page-layout';

const AboutPage: React.FC<PageProps<Queries.AboutPageQuery>> = ({ data }) => {
  const profileImage = data.profileImage
    ? getImage(data.profileImage.childImageSharp)
    : null;
  const headerImage = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;

  return (
    <PageLayout image={headerImage} title="About Us">
      <div className="container mx-auto px-4 lg:px-0">
        <span className="text-lg">
          Welcome to our blog's "About" page! We're glad you're here. This page
          is all about us, the people behind the blog. We're passionate about
          sharing our knowledge, opinions, and experiences with the world, and
          we hope you find our content informative and enjoyable.
        </span>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          {profileImage && (
            <div className="w-full sm:w-1/5">
              <GatsbyImage
                image={profileImage}
                alt="My Profile Image"
                className="w-full"
              />
            </div>
          )}
          <div className="flex-1 text-lg">
            Meet John, the tech enthusiast behind our Javascript blog. With over
            a decade of experience in web development, John has become a
            seasoned expert in all things Javascript. His passion for coding and
            his love of sharing knowledge have led him to create a blog that
            aims to help people master the art of Javascript and create amazing
            web experiences.
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export const Head: HeadFC = () => <title>About Page</title>;
