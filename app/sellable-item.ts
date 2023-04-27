/**
 * An item sold by the Gilded Rose.
 */
export class SellableItem {
  name: string;
  quality: number;
  sellIn: number;

  /**
   * Create a new SellableItem.
   * @param {string} name The name of the item. Must be unique.
   * @param {number} sellIn Sell the item before this number of days.
   * @param {number} quality The numeric quality of the item.
   */
  constructor( name: string, sellIn: number, quality: number ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick() {
    throw new Error( 'Not implemented.' );
  }
}
