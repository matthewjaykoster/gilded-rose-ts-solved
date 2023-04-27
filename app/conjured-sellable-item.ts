import { SellableItem } from "./sellable-item";

/**
 * Conjured sellable items are items which degrade twice as fast as normal.
 */
export class ConjuredSellableItem extends SellableItem {
  /**
   * Create a new ConjuredSellableItem.
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
      this.quality = this.quality - 2;

      if ( this.sellIn < 0 ) {
        this.quality = this.quality - 2;
      }
    }

    if ( this.quality < 0 ) {
      this.quality = 0;
    }
  }
}
