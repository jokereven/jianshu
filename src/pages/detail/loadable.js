<<<<<<< HEAD
/* eslint-disable import/no-anonymous-default-export */
=======
>>>>>>> 5fd7f175313e8d9d0124e16666f20f32388e88e4
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
	loader: () => import('./'),
	loading() {
		return <div>正在加载中...</div>;
	},
});

export default () => <LoadableComponent />;
