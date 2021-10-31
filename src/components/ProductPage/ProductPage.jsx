import * as S from './ProductPage.style.js';

import ImageContainer from './../ImageContainer/ImageContainer';
import InfoContainer from './../InfoContainer/InfoContainer';

const ProductPage = ({product}) => {
		return (
				<>
					<S.Container>
						<ImageContainer product = {product}/>
						<InfoContainer product = {product}/>
					</S.Container>
				</>
		)
}

export default ProductPage;