import * as S from './Home.style.js';
import { useState, useEffect } from 'react';
import ProductCard from './../ProductCard/ProductCard';
import ProductPage from './../ProductPage/ProductPage';

// Temporary Array of Product Objects 
const prodArray = [
	
	{
			name: 'Name1',
			description: 'This is a description of the product',
			price: '1111',
			image: ['https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg' , 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg'],
	},
	{
			name: 'Name2',
			description: 'This is a description of the product',
			price: '2222',
			image: ['https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg' , 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg'],
	},
	{
			name: 'Name3',
			description: 'This is a description of the product',
			price: '3333',
			image: ['https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg' , 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg'],
	},
	{
			name: 'Name4',
			description: 'This is a description of the product',
			price: '4444',
			image: ['https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg' , 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg'],
	},
	{
			name: 'Name',
			description: 'This is a description of the product',
			price: '69',
			image: ['https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg' , 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg'],
	},
	{
			name: 'Name',
			description: 'This is a description of the product',
			price: '69',
			image: ['https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg' , 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480712/2018/9/25/b98ff7bf-02ac-4a3f-a3b8-e427cc9fc6c61537865393739-Ddecor-Regular-Onsize-Microgel-Fibre-Pillow-3181537865392988-1.jpg'],
	},

]



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
				{
					console.log(intialState)

				}
			</S.Container> 

			{/*Just putting this component here to check how it looks when it is called
					Remove it after testing */}
			{/*<ProductPage product = {prodArray[0]}/>*/}

		</>
	)
}

export default Home;