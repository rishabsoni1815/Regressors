import * as S from './Home.style.js';

import ProductCard from './../ProductCard/ProductCard';

// Temporary Array of Product Objects 
const prodArray = [
	
	{
			name: 'Name',
			tagline: 'This is a tagline of the product',
			price: '69',
			image: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg',
	},
	{
			name: 'Name',
			tagline: 'This is a tagline of the product',
			price: '69',
			image: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg',
	},
	{
			name: 'Name',
			tagline: 'This is a tagline of the product',
			price: '69',
			image: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg',
	},
	{
			name: 'Name',
			tagline: 'This is a tagline of the product',
			price: '69',
			image: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg',
	},
	{
			name: 'Name',
			tagline: 'This is a tagline of the product',
			price: '69',
			image: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg',
	},
	{
			name: 'Name',
			tagline: 'This is a tagline of the product',
			price: '69',
			image: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg',
	},

]

const Home = () => {
	return(
		<>
			<S.Container>
				{
					prodArray.map((product, index) => (
						<ProductCard product = {product}/>
					))
				}
			</S.Container>
		</>
	)
}

export default Home;