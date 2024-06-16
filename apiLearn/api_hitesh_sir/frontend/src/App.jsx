import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// const useCustomReactQuery = (urlPath) => {
//   return [products, error, loading];
// };

function App() {
  // const [products, error, loading] = useCustomReactQuery("/api/products");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios("/api/products/?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    })();

    // cleanup
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <h1>Rahul Raniwal</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <h2>Number of products are {products.length}</h2>
    </>
  );
}

export default App;
