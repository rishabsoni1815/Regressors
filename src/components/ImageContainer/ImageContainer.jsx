import * as S from './ImageContainer.style.js';

const ImageContainer = ({product}) => {
	return (
		<>
			<S.Container>
				{product.images.map((pic, index) => (
					
					<S.ImageContainer>
						<S.Image 
							src = {pic}
							alt = "prod"
						/>
					</S.ImageContainer>
					
				))}
			</ S.Container>
		</>
	)
}

export default ImageContainer;