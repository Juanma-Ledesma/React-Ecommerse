import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
  } from "react-router-dom";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar';
import Banner  from './components/Banner';
import { ItemList } from './components/ItemList';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Navbar
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts}
				/>
				<Banner/>
				<Routes>
					<Route path="/" element={<ItemList
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts}
					/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
