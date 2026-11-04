import { graphql } from '~/lib/datocms/graphql';
import { ResponsiveImageFragment } from '~/components/ResponsiveImage/fragments';

// TODO: add srcSet to image
export const ContentWithImageSectionFragment = graphql(
  /* GraphQL */ `
    fragment ContentWithImageSectionFragment on ContentWithImageSectionRecord {
      pill
      title
      text {
        value
      }
      image {
        id
        responsiveImage(imgixParams: { fm: webp, ar: "1:1", maxW: 900 }) {
          ...ResponsiveImageFragment
        }
      }
      imagePosition
    }
  `,
  [ResponsiveImageFragment],
);
