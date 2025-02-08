import { ProductEffectService, productsFeature } from './products';
import { UserEffects, userFeature } from './users';

export const AppStore = {
  [productsFeature.name]: productsFeature.reducer,
  [userFeature.name]:userFeature.reducer
};

export const AppEffects = [
  ProductEffectService,
  UserEffects
];
