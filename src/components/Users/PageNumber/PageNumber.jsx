import styles from './pageNumber.module.css'


const PageNumber = ({page, currentPage, onPageChanged}) => {

  return (
    <div className={styles.page}>
      {
        currentPage === page
          ? <button onClick={(e) => onPageChanged(page)} className={styles.activePage}>{page}</button>
          : <button onClick={(e) => onPageChanged(page)} className={styles.notActivePage}>{page}</button>
      }
    </div>
  )
}


export default PageNumber;