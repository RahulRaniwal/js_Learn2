import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// Define routes
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "wooden table",
      price: 200,
      image:
        "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "modern chair",
      price: 150,
      image:
        "https://images.pexels.com/photos/212269/pexels-photo-212269.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "hanging lamp",
      price: 80,
      image:
        "https://images.pexels.com/photos/265676/pexels-photo-265676.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "leather sofa",
      price: 500,
      image:
        "https://images.pexels.com/photos/1480697/pexels-photo-1480697.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "coffee table",
      price: 120,
      image:
        "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];
  // http://localhost:3000/api/products?search=wooden-table

  if (req.query.search) {
    const searchTerm = req.query.search.toLocaleLowerCase();
    const filterProducts = products.filter((product) => {
      return product.name.toLocaleLowerCase().includes(searchTerm);
    });
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
