import { SellableItem } from "./sellable-item";

/**
 * Legendary sellable items are items which maintain quality and sell-in date over time, no matter what.
 */
export class LegendarySellableItem extends SellableItem {
  /**
   * Create a new LegendarySellableItem.
   * @param {string} name The name of the item. Must be unique.
   * @param {number} sellIn Sell the item before this number of days.
   * @param {number} quality The numeric quality of the item.
   */
  constructor( name: string, sellIn: number, quality: number ) {
    super( name, sellIn, quality );
  }

  tick() {
    // No-op
  }
}
