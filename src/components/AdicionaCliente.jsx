import React from 'react';
import { Formik, Field, useField } from 'formik'

const Campo = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div className='form-group'>
      <label htmlFor={props.id}>{label}</label>
      <input 
        {...field}
        {...props}
        className={meta.error && meta.touched ? 'is-invalid' : ''}
      />
      {meta.error && meta.touched ? (
        <div className='invalid-feedback'>{meta.error}</div>
      ) : null }
    </div>
  )
}

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik 
        initialValues={{ nome: '', email: '', nascimento: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.nome) {
            errors.nome = "O nome é obrigatório"
          }
          if (!values.email) {
            errors.email = "O email é obrigatório"
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { //Valida e-mail
            errors.email = 'O email é inválido'
          }
          if (!values.nascimento) {
            errors.nascimento = "A data de nascimento é obrigatória"
          }
          return errors
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values))
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>
              <Campo 
                id="nome" 
                name="nome" 
                type="text" 
                label="Nome"
              />
              <Campo 
                id="email" 
                name="email" 
                type="email" 
                label="Email"
              />
              <label htmlFor="nascimento">Data de Nascimento</label>
              <Campo 
                id="nascimento" 
                name="nascimento" 
                type="date" 
                label="Data de Nascimento"
              />
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>

    </>
  );
};

export default AdicionaCliente;
