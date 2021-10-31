import * as S from './InfoContainer.style.js';

const InfoContainer = ({product}) => {
	return (
		<>
			<S.Container>
				<S.Name> {product.name} </S.Name>
				<S.Description> {product.description} </S.Description>
				<hr />
				<S.Price> {` Rs. ${product.price}`} </S.Price>
			</S.Container>
		</>
	)
}

export default InfoContainer;