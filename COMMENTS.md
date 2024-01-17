## Run project

- For some reason, running FE and BE separately worked better for me. I didn't have time to investigate this as completing the task was the priority.
- Download or clone the project.
- `npm install`
- `npm run BE-start`
- `npm run FE-start`

## Applications.tsx

### Updated Code

- Introduced `useState` and `useEffect` hooks for dynamic state management and side effects.
- Implemented an asynchronous `fetchApplications` function for API requests.
- Added pagination functionality with `page` state and a "Load More" button.
- Included error handling for API responses.

### Explanation

- **Dynamic Data Fetching:** Moving from a static fixture to fetching data from an API makes the application dynamic and scalable.
- **Pagination:** To handle large datasets efficiently and improve user experience.
- **State Management:** To keep track of fetched applications and the current page.
- **Error Handling:** To gracefully handle API request failures.

### Testing

- Tests the `Applications` component's functionality including the initial render, API fetching, and button interactions.
- Mocks the global `fetch` to test the component's response to API data.
- Uses `waitFor` from `@testing-library/react` to handle asynchronous operations.

## SingleApplication.tsx

### Updated Code

- Introduced utility functions `formatToGBP` and `formatDate` to format loan amounts and dates.
- Destructured `application` props for cleaner code.

### Explanation

- **Data Formatting:** To present the data (like dates and currency) in a more user-friendly format.
- **Code Readability:** Destructuring improves readability and maintainability of the code.

### Testing

- Created to test the rendering of application details.
- Uses a mock application object to test if the component correctly displays the data.
