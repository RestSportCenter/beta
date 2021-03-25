export class HeroImagesProvider {
  getImages() {
    var images = [];
    [1, 2, 3].forEach((i) => {
      images.push({ src: `/hero/${i}.jpg` });
    });
    return images;
  }
}
