import React from 'react';
import './LoadingSpinner.styles.scss';

interface Props {}

const LoadingSpinner = (props: Props) => {
	return (
		<div className='loadingspinner'>
			<div className='circleLoading' />
		</div>
	);
};

export default LoadingSpinner;
