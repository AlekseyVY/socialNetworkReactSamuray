import styles from './pageNumber.module.css'


const PageNumber = ({page, currentPage, onPageChanged}) => {

  return (
    <div className={styles.page}>
      <button onClick={(e) => onPageChanged(page)} className={currentPage === page && styles.activePage}>
        {page}
      </button>
    </div>
  )
}


export default PageNumber;