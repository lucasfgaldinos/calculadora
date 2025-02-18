import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculator from './calculator.jsx'
import GlobalStyles from './styles/global_styles.js'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalStyles />
		<Calculator />
	</StrictMode>
)
