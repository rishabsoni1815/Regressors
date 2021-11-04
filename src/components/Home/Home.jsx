import * as S from './Home.style.js';
import { useState, useEffect } from 'react';
import ProductCard from './../ProductCard/ProductCard';
import ProductPage from './../ProductPage/ProductPage';

const Home = () => {
	
	const [intialState, setInitialState] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/products').then(res => {
			if(res.ok){
				return res.json()
			}
		}).then(jsonResponse => setInitialState(jsonResponse))
		.catch(err => console.log('Error: ' + err));
	}, [])

	return(
		<>
			 <S.Container>
				{
					intialState.map((product, index) => (
						<ProductCard product = {product}/>
					))
				}
			</S.Container> 

			<ProductPage product = {intialState[3]}/>
			
		</>
	)
}

export default Home;