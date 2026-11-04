import { graphql } from '~/lib/datocms/graphql';
import { ResponsiveImageFragment } from '~/components/ResponsiveImage/fragments';

export const ButtonFragment = graphql(/* GraphQL */ `
  fragment ButtonFragment on ButtonRecord {
    link
  }
`);

export const HeroSectionFragment = graphql(
  /* GraphQL */ `
    fragment HeroSectionFragment on HeroSectionRecord {
      title
      pill
      accent
      shortIntroduction(markdown: false)
      image {
        id
        responsiveImage(
          sizes: "(max-width: 513px) 100vw, 513px"
          imgixParams: { fm: webp, maxW: 513 }
        ) {
          ...ResponsiveImageFragment
        }
      }
      addButton
      button {
        ...ButtonFragment
      }
    }
  `,
  [ResponsiveImageFragment, ButtonFragment],
);
