'use client';
import { useFormState } from 'react-dom';
import loginAction from './loginActions';
import styles from './login.module.css';

export default function Login() {
	const [error, formAction] = useFormState(loginAction, undefined);
	return (
		<div>
			<div className={styles.container}>
				<h1 className={styles.h1}>Login</h1>
				{error && <p className={styles.error}>{error}</p>}
				<form action={formAction} autoComplete="off">
					<div className={styles.inputContainer}>
						<input type="text" placeholder="Código do Usuário" />
						<input type="email" placeholder="E-mail" />
						<input type="password" placeholder="Senha" />
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
}
