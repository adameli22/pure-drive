import { graphql } from '~/lib/datocms/graphql';

export const StepItemFragment = graphql(/* GraphQL */ `
  fragment StepItemFragment on StepItemRecord {
    title
    description(markdown: false)
  }
`);

export const StepByStepSectionFragment = graphql(
  /* GraphQL */ `
    fragment StepByStepSectionFragment on StepByStepSectionRecord {
      pill
      title
      description(markdown: false)
      steps {
        ...StepItemFragment
      }
    }
  `,
  [StepItemFragment],
);
