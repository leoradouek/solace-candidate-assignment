## Future Improvements

If I had more time, I would prioritize the following enhancements:

- **Advanced Search Filtering**  
  Currently, the search queries across multiple columns simultaneously. I would implement a more refined search experience that allows users to search by name while filtering results based on other specific columns such as city, degree, or specialties independently. This would provide more precise control over the results.

- **Sortable Columns**  
  Adding column sorting functionality would greatly improve data navigation. Users could click on column headers to sort ascending or descending by that attribute (e.g., last name, years of experience). This would enhance usability, especially for large datasets.

- **Row Details Modal**  
  Implementing a modal that opens upon clicking a table row would allow users to view more detailed information about an advocate without cluttering the main table. This could include contact info, detailed specialties, and additional notes.

- **Use of a Data Grid Component**  
  Integrating a robust data grid library (such as MUI DataGrid or AG Grid) would add built-in features like pagination, sorting, filtering, and virtualization, improving performance and user experience, especially with large data sets.

- **Improved Loading and Error States**  
  While basic loading and error states are implemented, enhancing these with better UI feedback—such as skeleton loaders, inline error messages, and retry options—would improve the overall experience.

- **Backend Pagination**  
  Adding server-side pagination is essential for scaling with large datasets. Instead of fetching all advocates at once, the backend would return data in pages, reducing load times and memory usage.
