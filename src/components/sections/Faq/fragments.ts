import { graphql } from '~/lib/datocms/graphql';

export const FaqItemFragment = graphql(/* GraphQL */ `
  fragment FaqItemFragment on FaqItemRecord {
    question
    answer(markdown: false)
  }
`);

export const FaqSectionFragment = graphql(
  /* GraphQL */ `
    fragment FaqSectionFragment on FaqSectionRecord {
      pill
      title
      description(markdown: false)
      items {
        ...FaqItemFragment
      }
    }
  `,
  [FaqItemFragment],
);
