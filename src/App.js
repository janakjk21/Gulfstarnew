import React, { Suspense, startTransition } from 'react';
import MyComponent from './components/MyComponent';

const App = () => {
	return (
		<Suspense fallback={<div>jk</div>}>
			<MyComponent />
		</Suspense>
	);
};

export default App;
