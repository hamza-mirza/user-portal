import React, { useState, useEffect } from 'react'
import SingleApplication from '../SingleApplication/SingleApplication'
import { Button } from '../ui/Button/Button'
import styles from './Applications.module.css'

const Applications = () => {
  const [applications, setApplications] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const limit = 5

  useEffect(() => {
    fetchApplications()
  }, [page])

  const fetchApplications = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`)

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      setApplications(prev => [...prev, ...data])
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch applications:', error)
    }
  }

  const handleLoadMore = () => {
    setPage(prev => prev + 1)
  }

  return (
    <>
      <div className={styles.Applications}>
        {loading && <p>Loading...</p>}
        {applications.map(application => (
          <SingleApplication
            key={application.id}
            application={application}
          />
        ))}
      </div>
      <div className={styles.ApplicationsButton}>
        <Button
          onClick={handleLoadMore}
          className={styles.loadMoreButton}
        >
          Load More
        </Button>
      </div>
    </>
  )
}

export default Applications
