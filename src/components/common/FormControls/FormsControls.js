import styles from './formControls.module.css'


export const Input = ({input, meta, props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? styles.error : ""}>
      <div>
        <input {...input} {...props}/>
      </div>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )
}


