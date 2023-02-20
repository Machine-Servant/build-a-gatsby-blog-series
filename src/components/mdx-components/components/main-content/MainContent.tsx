import styled from '@emotion/styled';
import tw from 'twin.macro';

export const MainContent = styled.article`
  ${tw`max-w-4xl px-4 py-12 mx-auto my-12 text-black lg:border lg:border-gray-200 lg:p-12`};

  &&& {
    .gatsby-resp-image-wrapper {
      ${tw`w-full mb-8`};
      max-width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;

      img {
        object-fit: cover;
      }
    }
  }
`;
