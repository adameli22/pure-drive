import { graphql } from '~/lib/datocms/graphql';

export const FooterFragment = graphql(/* GraphQL */ `
  fragment FooterFragment on FooterRecord {
    logo {
      url
    }
    footerText
  }
`);
