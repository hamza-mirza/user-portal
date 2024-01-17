import styles from './SingleApplication.module.css'
import { formatDate, formatToGBP } from '../../utils/utils'

import { ApplicationTypes } from '../../types'

type SingleApplicationProps = {
  application: ApplicationTypes
}

const SingleApplication: React.FC<SingleApplicationProps> = ({ application }) => {
  const { company, first_name, last_name, email, loan_amount, date_created, expiry_date } = application

  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {first_name} {last_name}
      </div>
      <div className={styles.cell}>
        <div className={styles.cellEmail}>
          <sub>Email</sub>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className={styles.cell}>
        <sub>Loan amount</sub>
        {formatToGBP(loan_amount)}
      </div>
      <div className={styles.cell}>
        <sub>Application date</sub>
        {formatDate(date_created)}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {formatDate(expiry_date)}
      </div>
    </div>
  )
}

export default SingleApplication
