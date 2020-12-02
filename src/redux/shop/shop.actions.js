import ShopActionsTypes from './shopt.types';

export const updateCollections = (collectionsMap) => ({
	type: ShopActionsTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});
