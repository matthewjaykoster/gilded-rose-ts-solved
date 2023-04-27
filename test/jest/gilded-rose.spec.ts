import { AgedSellableItem } from '@/aged-sellable-item';
import { ConjuredSellableItem } from '@/conjured-sellable-item';
import { GenericSellableItem } from '@/generic-sellable-item';
import { GildedRose } from '@/gilded-rose';
import { LegendarySellableItem } from '@/legendary-sellable-item';
import { LimitedTimeSellableItem } from '@/limited-time-sellable-item';

describe( 'Gilded Rose', () => {
  describe( 'GenericSellableItem', () => {
    it( 'should maintain the quality and reduce sell-in value given a generic item which is already at 0 quality', () => {
      // Assemble
      const items = [
        new GenericSellableItem( 'foo', 0, 0 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'foo' );
      expect( item.sellIn ).toBe( -1 );
      expect( item.quality ).toBe( 0 );
    } );

    it( 'should reduce the quality and reduce sell-in value given a generic item with positive quality', () => {
      // Assemble
      const items = [
        new GenericSellableItem( 'foo', 1, 1 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'foo' );
      expect( item.sellIn ).toBe( 0 );
      expect( item.quality ).toBe( 0 );
    } );

    it( 'should reduce the quality quickly and reduce sell-in value given a generic item with positive quality and negative sell-in', () => {
      // Assemble
      const items = [
        new GenericSellableItem( 'foo', -10, 10 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'foo' );
      expect( item.sellIn ).toBe( -11 );
      expect( item.quality ).toBe( 8 );
    } );
  } );

  describe( 'LegendarySellableItem', () => {
    it( 'should never reduce the quality and sell-in value given Sulfuras, Hand of Ragnaros', () => {
      // Assemble
      const items = [
        new LegendarySellableItem( 'Sulfuras, Hand of Ragnaros', 1, 1 ),
        new LegendarySellableItem( 'Sulfuras, Hand of Ragnaros', 5, 5 ),
        new LegendarySellableItem( 'Sulfuras, Hand of Ragnaros', 500, 500 ),
        new LegendarySellableItem( 'Sulfuras, Hand of Ragnaros', -10, 250 ),
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item0 = updatedItems[ 0 ];
      expect( item0.name ).toBe( 'Sulfuras, Hand of Ragnaros' );
      expect( item0.sellIn ).toBe( 1 );
      expect( item0.quality ).toBe( 1 );

      const item1 = updatedItems[ 1 ];
      expect( item1.name ).toBe( 'Sulfuras, Hand of Ragnaros' );
      expect( item1.sellIn ).toBe( 5 );
      expect( item1.quality ).toBe( 5 );

      const item2 = updatedItems[ 2 ];
      expect( item2.name ).toBe( 'Sulfuras, Hand of Ragnaros' );
      expect( item2.sellIn ).toBe( 500 );
      expect( item2.quality ).toBe( 500 );

      const item3 = updatedItems[ 3 ];
      expect( item3.name ).toBe( 'Sulfuras, Hand of Ragnaros' );
      expect( item3.sellIn ).toBe( -10 );
      expect( item3.quality ).toBe( 250 );
    } );
  } );

  describe( 'AgedSellableItem', () => {
    it( 'should maintain the quality given Aged Brie with a postive sell-in date', () => {
      // Assemble
      const items = [
        new AgedSellableItem( 'Aged Brie', 10, 10 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'Aged Brie' );
      expect( item.sellIn ).toBe( 9 );
      expect( item.quality ).toBe( 11 );
    } );

    it( 'should increase the quality given Aged Brie with a negative sell-in date', () => {
      // Assemble
      const items = [
        new AgedSellableItem( 'Aged Brie', -1, 10 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'Aged Brie' );
      expect( item.sellIn ).toBe( -2 );
      expect( item.quality ).toBe( 12 );
    } );

    it( 'should maintain the quality given Aged Brie with a negative sell-in date and quality at or above 50', () => {
      // Assemble
      const items = [
        new AgedSellableItem( 'Aged Brie', -1, 50 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'Aged Brie' );
      expect( item.sellIn ).toBe( -2 );
      expect( item.quality ).toBe( 50 );
    } );
  } );

  describe( 'LimitedTimeSellableItem', () => {
    it( 'should increase the quality given Backstage Passes with a positive sell-in date', () => {
      // Assemble
      const items = [
        new LimitedTimeSellableItem( 'Backstage passes to a TAFKAL80ETC concert', 20, 25 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'Backstage passes to a TAFKAL80ETC concert' );
      expect( item.sellIn ).toBe( 19 );
      expect( item.quality ).toBe( 26 );
    } );

    it( 'should increase the quality quickly given Backstage Passes with a positive sell-in date less than 11', () => {
      // Assemble
      const items = [
        new LimitedTimeSellableItem( 'Backstage passes to a TAFKAL80ETC concert', 10, 25 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'Backstage passes to a TAFKAL80ETC concert' );
      expect( item.sellIn ).toBe( 9 );
      expect( item.quality ).toBe( 27 );
    } );

    it( 'should increase the quality significantly given Backstage Passes with a positive sell-in date less than 6', () => {
      // Assemble
      const items = [
        new LimitedTimeSellableItem( 'Backstage passes to a TAFKAL80ETC concert', 5, 25 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'Backstage passes to a TAFKAL80ETC concert' );
      expect( item.sellIn ).toBe( 4 );
      expect( item.quality ).toBe( 28 );
    } );

    it( 'should set the quality to zero given Backstage Passes with a sell-in date less than 0', () => {
      // Assemble
      const items = [
        new LimitedTimeSellableItem( 'Backstage passes to a TAFKAL80ETC concert', 0, 25 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'Backstage passes to a TAFKAL80ETC concert' );
      expect( item.sellIn ).toBe( -1 );
      expect( item.quality ).toBe( 0 );
    } );
  } );

  describe( 'ConjuredSellableItem', () => {
    it( 'should reduce the quality quickly and reduce sell-in value given a conjured item with positive quality', () => {
      // Assemble
      const items = [
        new ConjuredSellableItem( 'foo', 1, 1 ),
        new ConjuredSellableItem( 'foo', 1, 2 ),
        new ConjuredSellableItem( 'foo', -1, 4 ),
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item0 = updatedItems[ 0 ];
      expect( item0.name ).toBe( 'foo' );
      expect( item0.sellIn ).toBe( 0 );
      expect( item0.quality ).toBe( 0 );

      const item1 = updatedItems[ 1 ];
      expect( item1.name ).toBe( 'foo' );
      expect( item1.sellIn ).toBe( 0 );
      expect( item1.quality ).toBe( 0 );

      const item2 = updatedItems[ 2 ];
      expect( item2.name ).toBe( 'foo' );
      expect( item2.sellIn ).toBe( -2 );
      expect( item2.quality ).toBe( 0 );
    } );

    it( 'should reduce the quality quickly and reduce sell-in value given a generic item with positive quality and negative sell-in', () => {
      // Assemble
      const items = [
        new GenericSellableItem( 'foo', -10, 10 )
      ];
      const gildedRose = new GildedRose( items );

      // Act
      const updatedItems = gildedRose.updateQuality();

      // Assert
      const item = updatedItems[ 0 ];
      expect( item.name ).toBe( 'foo' );
      expect( item.sellIn ).toBe( -11 );
      expect( item.quality ).toBe( 8 );
    } );
  } );
} );
