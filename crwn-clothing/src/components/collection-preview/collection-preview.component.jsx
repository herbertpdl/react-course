import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  ColectionPreviewTitle,
  Preview,
} from './collection-preview-styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <ColectionPreviewTitle>{title.toUpperCase()}</ColectionPreviewTitle>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
