import { evaluate } from 'mathjs'
import { useState } from 'react'
import {
	TbBackspace,
	TbDivide,
	TbEqual,
	TbMinus,
	TbPlus,
	TbPlusMinus,
	TbX
} from 'react-icons/tb'
import { ToastContainer, Zoom, toast } from 'react-toastify'
import {
	Button,
	ButtonContainer,
	DeleteButtonContainer,
	Display,
	DisplayValue,
	Footer,
	Main,
	TheCalculator
} from './styles/calculator_styles'

function Calculator() {
	const [currentValue, setCurrentValue] = useState('')

	function addDigit(digit) {
		switch (digit) {
			case '.':
				if (!currentValue) return
				return setCurrentValue(currentValue.concat(','))

			case '0':
				if (currentValue === '0') return
				if (currentValue === '') {
					return setCurrentValue(digit)
				}
				break

			case '*':
				return setCurrentValue(currentValue.concat('x'))

			default:
				if (currentValue === '0') {
					return setCurrentValue(digit)
				}
				break
		}

		setCurrentValue(currentValue + digit)
	}

	function invertValue() {
		if (!currentValue) {
			return
		}

		try {
			const newCurrentValue = currentValue.toString().replaceAll(',', '.')
			const invertedValue = evaluate(newCurrentValue) * -1
			setCurrentValue(invertedValue.toString().replaceAll('.', ','))
		} catch (error) {
			toast.warn(
				`Atenção: O valor não pode ser invertido!
            Por favor, verifique se o valor é válido
            para inversão e tente novamente.`
			)
		}
	}

	function calculate() {
		try {
			const newCurrentValue = currentValue
				.replaceAll(',', '.')
				.replaceAll('x', '*')
			const result = evaluate(newCurrentValue)
			const formatedResult = result.toString().replaceAll('.', ',')
			setCurrentValue(formatedResult)
		} catch (error) {
			toast.error(
				`Erro: Não foi possível interpretar o cálculo!
            Por favor, verifique o formato do cálculo e tente novamente.`
			)
		}
	}

	return (
		<Main>
			<TheCalculator>
				<Display>
					<DisplayValue disabled value={currentValue} />
				</Display>

				<DeleteButtonContainer>
					<button
						onClick={() => setCurrentValue(currentValue.slice(0, -1))}
						type="button"
					>
						<TbBackspace />
					</button>
				</DeleteButtonContainer>

				<ButtonContainer>
					<Button onClick={() => setCurrentValue('')} $clear $doubledWidth>
						C
					</Button>
					<Button onClick={invertValue} $operator>
						<TbPlusMinus />
					</Button>
					<Button onClick={() => addDigit('/')} $operator>
						<TbDivide />
					</Button>
					<Button onClick={() => addDigit('7')}>7</Button>
					<Button onClick={() => addDigit('8')}>8</Button>
					<Button onClick={() => addDigit('9')}>9</Button>
					<Button onClick={() => addDigit('*')} $operator>
						<TbX />
					</Button>
					<Button onClick={() => addDigit('4')}>4</Button>
					<Button onClick={() => addDigit('5')}>5</Button>
					<Button onClick={() => addDigit('6')}>6</Button>
					<Button onClick={() => addDigit('-')} $operator>
						<TbMinus />
					</Button>
					<Button onClick={() => addDigit('1')}>1</Button>
					<Button onClick={() => addDigit('2')}>2</Button>
					<Button onClick={() => addDigit('3')}>3</Button>
					<Button onClick={() => addDigit('+')} $operator>
						<TbPlus />
					</Button>
					<Button onClick={() => addDigit('0')} $doubledWidth>
						0
					</Button>
					<Button onClick={() => addDigit('.')}>,</Button>
					<Button onClick={calculate} $result>
						<TbEqual />
					</Button>
				</ButtonContainer>
			</TheCalculator>

			<Footer>Desenvolvido por Lucas Galdino</Footer>

			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Zoom}
			/>
		</Main>
	)
}

export default Calculator
