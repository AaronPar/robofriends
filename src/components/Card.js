import React from 'react';

const Card =({name, email, id}) =>{
	return(
		<div className='bg-light-green tc dib br3 pa3 ma2 grow bw shadow-5'>
			<img src={`https://robohash.org/${id}150x150`} alt="robots"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;