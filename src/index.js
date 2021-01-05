// @ts-check
import { multiply, storeAddress, getAddress } from './utils.js';
import { addAlbum } from './album.js';

const result = multiply(2, 3);

console.log({ multiply: result });

const input = storeAddress(
  'Jason',
  '123 Address St',
  'Portland',
  'OR',
  '12345',
);

const addressLine1 = getAddress(input);

console.log({ addressLine1 });

addAlbum('Jimmy Eat World', 'Futures', 2004);
