import { SellableItem, GildedRose } from '../app/gilded-rose';

const items = [
  new SellableItem("+5 Dexterity Vest", 10, 20), //
  new SellableItem("Aged Brie", 2, 0), //
  new SellableItem("Elixir of the Mongoose", 5, 7), //
  new SellableItem("Sulfuras, Hand of Ragnaros", 0, 80), //
  new SellableItem("Sulfuras, Hand of Ragnaros", -1, 80),
  new SellableItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new SellableItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new SellableItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // this conjured item does not work properly yet
  new SellableItem("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}