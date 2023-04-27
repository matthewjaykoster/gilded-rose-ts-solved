import { SellableItem } from "./sellable-item";

/**
 * Generic sellable items are typical items with nothing special about them.
 */
export class GenericSellableItem extends SellableItem {
  /**
   * Create a new GenericSellableItem.
   * @param {string} name The name of the item. Must be unique.
   * @param {number} sellIn Sell the item before this number of days.
   * @param {number} quality The numeric quality of the item.
   */
  constructor( name: string, sellIn: number, quality: number ) {
    super( name, sellIn, quality );
  }

  tick() {
    this.sellIn = this.sellIn - 1;

    if ( this.quality > 0 ) {
      this.quality = this.quality - 1;

      if ( this.sellIn < 0 ) {
        this.quality = this.quality - 1;
      }
    }
  }
}
