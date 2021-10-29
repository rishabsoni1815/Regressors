import * as S from './ProductCard.style.js';

const ProductCard = ({product}) => {
	return (
		<>
			<S.Container>
					
				<S.ImageContainer>
					<img 
						src = {`${product.image}`}
						width = "210px"
					/>
				</S.ImageContainer>

				<S.InfoContainer>
					<S.Name> {product.name} </S.Name>
					<S.Description> {product.tagline} </S.Description>
					<S.Price> Rs. {product.price} </S.Price>
				</S.InfoContainer>

			</S.Container>
		</>
	)
}

export default ProductCard;