import * as S from './Combo.style.js';
import { useState, useEffect } from 'react';

import plusImage from './../../assets/plus.png';

const Combo = ({id}) => {

	const [comboPack, setComboPack] = useState({"product_id": [5, 13], "products": ["U.S. Polo Assn. Men White & Grey Sneakers", "Puma Unisex Set of 2 Navy Blue & Red Cushioned Sneaker Socks"]});
	const [allProds, setAllProds] = useState([]);

	useEffect(() => {
		fetch(`https://api-combo-kmeans.herokuapp.com/${id}`).then(res => {
			if(res.ok){
				return res.json()
			}
		}).then(jsonResponse => setComboPack(jsonResponse))
		.catch(err => console.log(`Error : `, err));
	}, [])

  useEffect(() => {
		fetch('http://localhost:5000/products').then(res => {
			if(res.ok){
				return res.json()
			}
		}).then(jsonResponse => setAllProds(jsonResponse))
		.catch(err => console.log('Error: ' + err));
	}, [])

	return (
		<>
{/*		{console.log("i am here")}
			{console.log("product_id @ combo.js ", id)}
			{console.log("the two child ids @ combo are ", comboPack)}
			{console.log("all products @ combo.js", allProds)}
*/}
			<S.ComboContainer>

			{comboPack.product_id.map((x, key) => (
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

			))}
			
			</S.ComboContainer>

		</>
	)
}

export default Combo;