import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const Loading = () => {
	return (
		<div style={{ textAlign: "center", marginTop: '100px', width: '100%' }}>
			<CircularProgress />
		</div>
	)
}

export default Loading;