import { graphql } from '~/lib/datocms/graphql';
import { ResponsiveImageFragment } from '~/components/ResponsiveImage/fragments';

// TODO: add srcSet to image
export const ContactSectionFragment = graphql(
  /* GraphQL */ `
    fragment ContactSectionFragment on ContactSectionRecord {
      pill
      title
      description(markdown: false)
      phoneNumber
      email
      image {
        id
        responsiveImage(imgixParams: { fm: webp, ar: "437:583", maxW: 437 }) {
          ...ResponsiveImageFragment
        }
      }
    }
  `,
  [ResponsiveImageFragment],
);
