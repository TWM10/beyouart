export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Canvas Art", price: 2500, image: "/art1.jpg" },
    { id: 2, name: "Modern Print", price: 3000, image: "/art2.jpg" },
    { id: 3, name: "Digital Art", price: 2000, image: "/art3.jpg" },
    { id: 4, name: "Custom Piece", price: 4500, image: "/art4.jpg" },
    { id: 5, name: "Poster", price: 1500, image: "/art5.jpg" }
  ]);
}
