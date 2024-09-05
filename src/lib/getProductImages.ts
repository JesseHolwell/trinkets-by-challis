import fs from "fs";
import path from "path";

export function getProductImages() {
  const directory = path.join(process.cwd(), "src", "assets", "products");
  const fileNames = fs.readdirSync(directory);

  const images = fileNames.map((fileName) => ({
    name: fileName.replace(/\.[^/.]+$/, ""),
    src: `/assets/products/${fileName}`,
  }));

  return images;
}
