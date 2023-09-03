import React, { useEffect, useState } from 'react';
import { getSEO } from '../utils/seo';
import { getStatistics } from '../utils/statistics';

const AdminDashboard = () => {
  const [seoData, setSeoData] = useState(null);
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const seo = await getSEO();
      const stats = await getStatistics();
      setSeoData(seo);
      setStatistics(stats);
    }
    fetchData();
  }, []);

  return (
    <div id="adminDashboard">
      <h1>Admin Dashboard</h1>
      <h2>SEO Data</h2>
      {seoData && (
        <div>
          <p>Page Views: {seoData.pageViews}</p>
          <p>Bounce Rate: {seoData.bounceRate}</p>
          <p>Average Session Duration: {seoData.avgSessionDuration}</p>
        </div>
      )}
      <h2>Website Statistics</h2>
      {statistics && (
        <div>
          <p>Total Reviews: {statistics.totalReviews}</p>
          <p>Average Rating: {statistics.avgRating}</p>
          <p>Most Reviewed Movie: {statistics.mostReviewedMovie}</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;