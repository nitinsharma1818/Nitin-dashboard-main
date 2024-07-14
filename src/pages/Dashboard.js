// src/components/Dashboard.js
import React from 'react';
import { Grid, Paper } from '@mui/material';
import Table from '../components/Table';
import Chart from '../components/Chart';
import Calendar from '../components/Calendar';
import KanbanBoard from '../components/KanbanBoard';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Table */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <h2>Table</h2>
            <Table />
          </Paper>
        </Grid>
        { Chart }
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <h2>Chart</h2>
            <Chart />
          </Paper>
        </Grid>
        { Calendar }
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <h2>Calendar</h2>
            <Calendar />
          </Paper>
        </Grid>
        { KanbanBoard }
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <h2>Kanban Board</h2>
            <KanbanBoard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
