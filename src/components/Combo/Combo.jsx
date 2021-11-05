import * as S from './Combo.style.js';
import { useState, useEffect } from 'react';

import plusImage from './../../assets/plus.png';

const Combo = ({product}) => {

	const [comboPack, setComboPack] = useState({});
	const [allProds, setAllProds] = useState([]);

  useEffect(() => {
		fetch('http://localhost:5000/products').then(res => {
			if(res.ok){
				return res.json()
			}
		}).then(jsonResponse => setAllProds(jsonResponse))
		.catch(err => console.log('Error: ' + err));
	}, [])

		useEffect(() => {
		fetch(`https://api-combo-kmeans.herokuapp.com/${product.product_id}`).then(res => {
			if(res.ok){
				return res.json()
			}
		}).then(jsonResponse => setComboPack(jsonResponse))
		.catch(err => console.log(`Error : `, err));
	}, [product])


	return (
		<>
			<S.ComboContainer>
			{console.log("compbopack", comboPack?.product_id)}
			
			{
			comboPack && comboPack.product_id
			?
			comboPack.product_id.map((x, key) => (
				allProds.map((product, key) => (
							x === product.product_id 
							? 	
								<S.Container>
									
									<S.PlusContainer>
									{
										comboPack.product_id.indexOf(x) !== 0 
									?
										<img src = {plusImage} width = "40px" />
									: 
										null
									}
									</S.PlusContainer>
									
									<S.ProductContainer>
										<S.Image 
											src = {product.images[0]}
											alt = "product image"
											width = "180px"
										/>
										<S.InfoContainer>
											<S.Name> {product.name} </S.Name>
											<S.Description> {product.description} </S.Description>
											<S.Price> {` Rs. ${product.price}`} </S.Price>
										</S.InfoContainer>
									</S.ProductContainer>
								</S.Container>
							: 
								null 
					))					

			))

			:
				null
			}
			
			</S.ComboContainer>

		</>
	)
}

export default Combo;