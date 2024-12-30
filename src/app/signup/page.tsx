'use client';

import { useFormState  } from 'react-dom';
import signupAction from './signupActions';
import styles from './signup.module.css';

export default function Signup() {
	const [error, formAction] = useFormState(signupAction,undefined);
	return (
		<div className={styles.signupContainer}>
			<div className={styles.container}>
				<h1 className={styles.h1}>Signup</h1>
				{/* Formulário de cadastro */}
				<form action="formAction" autoComplete="off">
					<div className={styles.divForm}>
						{error && <p className="text-red-500">{error}</p>}
						<input type="text" autoComplete="off" placeholder="Código do Usuário" disabled className={styles.inputGroup} />
						<input type="text" autoComplete="off" placeholder="Nome" className={styles.inputGroup} />
						<input type="email" autoComplete="off" placeholder="E-mail" className={styles.inputGroup} />
						<input type="password" placeholder="Senha" className={styles.inputGroup} />
						<input type="password" placeholder="Confirme a Senha" className={styles.inputGroup} />
						<button type="submit" className={styles.buttonSubmit}>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
			{/* Botões de login */}
		</div>
	);
}
