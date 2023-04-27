import { SellableItem } from '@/sellable-item';

/**
 * A service which manages and updates the quality of any SellableItems it is repsonsible for.
 */
export class GildedRose {
  items: Array<SellableItem>;

  constructor( items = [] as Array<SellableItem> ) {
    this.items = items;
  }

  /**
   * Iterate over all items and use their internal logic to update quality and sell-in values.
   * @returns {Array<SellableItem>} The modified array of sellable items.
   */
  updateQuality(): Array<SellableItem> {
    for ( let i = 0; i < this.items.length; i++ ) {
      this.items[ i ].tick();
    }

    return this.items;
  }
}
