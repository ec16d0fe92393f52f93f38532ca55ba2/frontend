import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@app/App.tsx';

import { store } from '@shared/store/store';
import '@styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
