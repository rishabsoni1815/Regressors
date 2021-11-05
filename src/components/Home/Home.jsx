import * as S from './Home.style.js';
import { useState, useEffect } from 'react';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import ProductCard from './../ProductCard/ProductCard';
import ProductPage from './../ProductPage/ProductPage';

const Home = () => {
	
	const [allProds, setAllProds] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/products').then(res => {
			if(res.ok){
				return res.json()
			}
		}).then(jsonResponse => setAllProds(jsonResponse))
		.catch(err => console.log('Error: ' + err));
	}, [])

	const foo = () => {	
		setTimeout(function(){
		    window.location.reload()
		}, 200);
	}

	return(
		<Router>
			 <S.Container>
				{	
					allProds.map((product, index) => (
						<Link to={`/${product._id}`}>
							<a  onClick = {foo}>
								<ProductCard product = {product}/>
							</a>
						</Link>
					))
				}
			</S.Container> 			
		</Router>
	)
}

export default Home;