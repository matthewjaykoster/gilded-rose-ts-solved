import { SellableItem } from "./sellable-item";

/**
 * Limited-time sellable items are items which increase in quality over time, and moreso as they near
 * their sell-in date. Following their sell-in date, they are useless.
 */
export class LimitedTimeSellableItem extends SellableItem {
  /**
   * Create a new LimitedTimeSellableItem.
   * @param {string} name The name of the item. Must be unique.
   * @param {number} sellIn Sell the item before this number of days.
   * @param {number} quality The numeric quality of the item.
   */
  constructor( name: string, sellIn: number, quality: number ) {
    super( name, sellIn, quality );
  }

  tick() {
    this.sellIn = this.sellIn - 1;
    if ( this.sellIn < 0 ) {
      this.quality = 0;
      return;
    }

    this.quality = this.quality + 1;

    if ( this.sellIn < 10 ) {
      this.quality = this.quality + 1;
    }

    if ( this.sellIn < 5 ) {
      this.quality = this.quality + 1;
    }

    if ( this.quality > 50 ) {
      this.quality = 50;
    }
  }
}
