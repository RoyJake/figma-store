 const products = {
  prompt_magazine: {
    productName: "The Prompt Magazine",
    productDescription: "The Prompt is a magazine by Figma's Story Studio and Brand Studio. Featuring leaders working across design, engineering, product development, and the built environment, this collection of essays and interviews takes on questions about how AI might shape the way we create. The 80-page print edition was designed by Chloe Scheffe. A digital version is available on our blog.",
    productImages: [
      "/product/prompt_magazine/1.png",
      "/product/prompt_magazine/2.png",
      "/product/prompt_magazine/3.png",
      "/product/prompt_magazine/4.png",
      "/product/prompt_magazine/5.png",
      "/product/prompt_magazine/6.png",
    ]
  },
  chunky_glyph_tee:{
    productName: "Chunky Glyph Tee",
    productDescription: "In case you missed it (how could you have missed it?) the shapes spell Figma.",
    productImages: [
      "/product/wildflower_hoodie/1.jpg",
      "/product/wildflower_hoodie/2.jpg",
      "/product/wildflower_hoodie/3.jpg",
      "/product/wildflower_hoodie/4.png",
      "/product/wildflower_hoodie/5.png",
      "/product/wildflower_hoodie/6.png",
    ]
  },
  smiles_nalgene:{
    productName: "Wildflower Hoodie",
    productDescription: "Your new favorite black hoodie.",
    productImages: [
      "/product/wildflower_hoodie/one.jpg",
      "/product/wildflower_hoodie/2.jpg",
      "/product/wildflower_hoodie/3.jpg",
      "/product/wildflower_hoodie/4.jpg",
      "/product/wildflower_hoodie/5.png",
      "/product/wildflower_hoodie/6.png",
    ]
  },
  independent_corners_tee:{
    productName: "Wildflower Hoodie",
    productDescription: "Your new favorite black hoodie.",
    productImages: [
      "/product/wildflower_hoodie/one.jpg",
      "/product/wildflower_hoodie/2.jpg",
      "/product/wildflower_hoodie/3.jpg",
      "/product/wildflower_hoodie/4.jpg",
      "/product/wildflower_hoodie/5.png",
      "/product/wildflower_hoodie/6.png",
    ]
  },
  doodle_tee:{
    productName: "Wildflower Hoodie",
    productDescription: "Your new favorite black hoodie.",
    productImages: [
      "/product/wildflower_hoodie/one.jpg",
      "/product/wildflower_hoodie/2.jpg",
      "/product/wildflower_hoodie/3.jpg",
      "/product/wildflower_hoodie/4.jpg",
      "/product/wildflower_hoodie/5.png",
      "/product/wildflower_hoodie/6.png",
    ]
  },
  figma_doodle_socks:{
    productName: "Wildflower Hoodie",
    productDescription: "Your new favorite black hoodie.",
    productImages: [
      "/product/wildflower_hoodie/one.jpg",
      "/product/wildflower_hoodie/2.jpg",
      "/product/wildflower_hoodie/3.jpg",
      "/product/wildflower_hoodie/4.jpg",
      "/product/wildflower_hoodie/5.png",
      "/product/wildflower_hoodie/6.png",
    ]
  },
  wildflower_hoodie: {
    productName: "Wildflower Hoodie",
    productDescription: "Your new favorite black hoodie.",
    productImages: [
      "/product/wildflower_hoodie/one.jpg",
      "/product/wildflower_hoodie/2.jpg",
      "/product/wildflower_hoodie/3.jpg",
      "/product/wildflower_hoodie/4.jpg",
      "/product/wildflower_hoodie/5.png",
      "/product/wildflower_hoodie/6.png",
    ],
  },
  inkblot_tee: {
    productName: "Inblot Tee",
    productDescription: "Remember when you said you wanted to add more color to your wardrobe?",
    productImages: [
      "/product/inkblot_tee/1.png",
      "/product/inkblot_tee/2.jpg",
      "/product/inkblot_tee/3.jpg",
      "/product/inkblot_tee/4.jpg",
      "/product/inkblot_tee/5.png",
      "/product/inkblot_tee/6.png",
    ],
  },
} as const;

export type ProductKey = keyof typeof products;

export default products;