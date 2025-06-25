import React, { Suspense } from 'react'
import DashboardPage from './page';
import {BarLoader} from 'react-spinners'

const Dashboard = () => {
  return (
    <div className='px-5'><h1 className='mb-5'>Dashboard page</h1>
    <Suspense fallback={<BarLoader className='mt-4' width={'100%'} color='#b7d389'/>}>
        <DashboardPage/>
    </Suspense>
    
    </div>
  )
}

export default Dashboard;