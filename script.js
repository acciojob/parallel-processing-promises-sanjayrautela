//your JS code here. If required.

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


document.getElementById('download-images-button').addEventListener('click', async function() {
  try {
    const promises = images.map(async image => {
      const response = await fetch(image.url);
      if (!response.ok) {
        throw new Error(`Failed to load image's URL: ${image.url}`);
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      const img = document.createElement('img');
      img.src = imageUrl;
      document.getElementById('output').appendChild(img);
    });
    await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }
});


