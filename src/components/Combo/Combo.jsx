import * as S from './Combo.style.js';
import * as Icons from 'react-feather';

import { useState, useEffect } from 'react';

import plusImage from './../../assets/plus.png';

const Combo = ({product}) => {

	const [comboPack, setComboPack] = useState({});
	const [allProds, setAllProds] = useState([]);

  useEffect(() => {
		fetch('https://floating-atoll-22103.herokuapp.com/products').then(res => {
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
		<S.Container>

			<S.Heading> Get Combo </S.Heading>

			<S.ComboContainer>

			<S.Combo>
			{
				comboPack && comboPack.product_id
				?
				comboPack.product_id.map((x, key) => (
					allProds.map((product, key) => (
								x === product.product_id
								?
									<S.Wrapper>

										<S.PlusContainer>
										{
											comboPack.product_id.indexOf(x) !== 0
										?
											<img alt = "+" src = {plusImage} width = "40px" />
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
									</S.Wrapper>
								:
									null
						))

				))

				:
					null
			}
			</S.Combo>
			
				<S.Button>
					<Icons.ShoppingBag size = "18px" />
				  <S.Text>Add To Bag</S.Text>
				</S.Button>

			</S.ComboContainer>

		</S.Container>
	)
}

export default Combo;