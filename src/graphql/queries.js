/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMasjid = /* GraphQL */ `
  query GetMasjid($id: ID!) {
    getMasjid(id: $id) {
      id
      name
      background
      generalpolicy
      management
      latitude
      longitude
      address
      phone
      fax
      nikah
      counselling
      janazah
      ruqya
      url1
      url2
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMasjids = /* GraphQL */ `
  query ListMasjids(
    $filter: ModelMasjidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMasjids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        background
        generalpolicy
        management
        latitude
        longitude
        address
        phone
        fax
        nikah
        counselling
        janazah
        ruqya
        url1
        url2
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
