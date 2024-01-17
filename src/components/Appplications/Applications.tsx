import React, { useState, useEffect } from 'react'
import SingleApplication from '../SingleApplication/SingleApplication'
import { Button } from '../ui/Button/Button'
import styles from './Applications.module.css'

const Applications = () => {
  const [applications, setApplications] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 5

  useEffect(() => {
    fetchApplications()
  }, [currentPage])

  const fetchApplications = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/applications?_page=${currentPage}&_limit=${limit}`)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      setApplications(prev => [...prev, ...data])
    } catch (error) {
      console.error('Failed to fetch applications:', error)
    }
  }

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1)
  }

  return (
    <>
      <div className={styles.Applications}>
        {applications.map(application => (
          <SingleApplication
            key={application.id}
            application={application}
          />
        ))}
      </div>
      <Button
        onClick={handleLoadMore}
        className={styles.loadMoreButton}
      >
        Load More
      </Button>
    </>
  )
}

export default Applications
