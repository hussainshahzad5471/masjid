/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { listMasjids } from "../graphql/queries";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import SocialPost from "./SocialPost";
import { Collection } from "@aws-amplify/ui-react";
export default function MasjidCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: listMasjids,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "MasjidCollection")}
      {...rest}
    >
      {(item, index) => (
        <SocialPost
          masjid={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SocialPost>
      )}
    </Collection>
  );
}
