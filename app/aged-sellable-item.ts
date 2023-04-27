import { SellableItem } from "./sellable-item";

/**
 * Aged sellable items are items which increase in quality over time, rather than decrease.
 */
export class AgedSellableItem extends SellableItem {
  /**
   * Create a new AgedSellableItem.
   * @param {string} name The name of the item. Must be unique.
   * @param {number} sellIn Sell the item before this number of days.
   * @param {number} quality The numeric quality of the item.
   */
  constructor( name: string, sellIn: number, quality: number ) {
    super( name, sellIn, quality );
  }

  tick() {
    this.sellIn = this.sellIn - 1;
    this.quality = this.quality + 1;

    if ( this.sellIn < 0 ) {
      this.quality = this.quality + 1;
    }

    if ( this.quality > 50 ) {
      this.quality = 50;
    }
  }
}
