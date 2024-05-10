/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMasjid = /* GraphQL */ `
  mutation CreateMasjid(
    $input: CreateMasjidInput!
    $condition: ModelMasjidConditionInput
  ) {
    createMasjid(input: $input, condition: $condition) {
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
export const updateMasjid = /* GraphQL */ `
  mutation UpdateMasjid(
    $input: UpdateMasjidInput!
    $condition: ModelMasjidConditionInput
  ) {
    updateMasjid(input: $input, condition: $condition) {
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
export const deleteMasjid = /* GraphQL */ `
  mutation DeleteMasjid(
    $input: DeleteMasjidInput!
    $condition: ModelMasjidConditionInput
  ) {
    deleteMasjid(input: $input, condition: $condition) {
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
