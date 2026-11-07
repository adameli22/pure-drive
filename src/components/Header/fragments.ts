import { graphql } from '~/lib/datocms/graphql';

export const HeaderFragment = graphql(/* GraphQL */ `
  fragment HeaderFragment on HeaderRecord {
    logo {
      url
    }
    headerLinks {
      linkField
    }
  }
`);
