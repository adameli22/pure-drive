import { graphql } from '~/lib/datocms/graphql';

export const PricingItemFragment = graphql(/* GraphQL */ `
  fragment PricingItemFragment on PricingItemRecord {
    title
    description(markdown: false)
    price
    highlight
  }
`);

export const PricingSectionFragment = graphql(
  /* GraphQL */ `
    fragment PricingSectionFragment on PricingSectionRecord {
      pill
      title
      description(markdown: false)
      prices {
        ...PricingItemFragment
      }
    }
  `,
  [PricingItemFragment],
);
