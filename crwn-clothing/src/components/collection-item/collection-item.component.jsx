import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemImage,
  PriceContainer,
  NameContainer,
  AddButton,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage
        backgroundImage={`url(${imageUrl})`}
      />
      <CollectionItemFooter>
        <NameContainer className='name'>{name}</NameContainer>
        <PriceContainer className='price'>{price}</PriceContainer>
      </CollectionItemFooter>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
