import * as S from './ProductPage.style.js';

import ImageContainer from './../ImageContainer/ImageContainer';
import InfoContainer from './../InfoContainer/InfoContainer';
import Combo from './../Combo/Combo';

const ProductPage = ({product}) => {
		return (
				<>

					<S.Container>
						<ImageContainer product = {product}/>
						<InfoContainer product = {product}/>
					</S.Container>
					{console.log("product_id @ productpage : ", product.product_id)}
					<Combo id={product.product_id}/>
				</>
		)
}

export default ProductPage;