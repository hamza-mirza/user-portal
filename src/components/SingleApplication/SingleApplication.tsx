import React from 'react'
import styles from './SingleApplication.module.css'

const formatToGBP = (amount: string) => {
  const numericAmount = Number(amount)
  if (isNaN(numericAmount)) {
    throw new Error('Invalid amount: unable to convert to number.')
  }

  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(numericAmount)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const SingleApplication = ({ application }) => {
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
