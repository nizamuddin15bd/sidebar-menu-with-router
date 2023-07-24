import React from 'react';

const Dashboard = () => {
    return (
        <div className='p-5 h-screen bg-gray-100'>
            <h1 className='text-xl mb-2'> Your orders</h1>
            <table className='w-full'>
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3 font-semibold tracking-wide text-left'>Details</th>
                        <th className='p-3 font-semibold tracking-wide text-left'>No</th>
                        <th className='p-3 font-semibold tracking-wide text-left'>Status</th>
                        <th className='p-3 font-semibold tracking-wide text-left'>Data</th>
                        <th className='p-3 font-semibold tracking-wide text-left'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-3 text-sm text-gray-700'> <a href="#" className='font-bold text-blue-500'>1000</a></td>
                        <td className='p-3 text-sm text-gray-700'>kring New office chair, mesh</td>
                        <td className='p-3 text-sm text-gray-700'>delevered</td>
                        <td className='p-3 text-sm text-gray-700'>15/10/2021</td>
                        <td className='p-3 text-sm text-gray-700'>$2100</td>
                    </tr>
                    <tr>
                        <td className='p-3 text-sm text-gray-700'> <a href="#" className='font-bold text-blue-500'>1000</a></td>
                        <td className='p-3 text-sm text-gray-700'>kring New office chair, mesh</td>
                        <td className='p-3 text-sm text-gray-700'>delevered</td>
                        <td className='p-3 text-sm text-gray-700'>15/10/2021</td>
                        <td className='p-3 text-sm text-gray-700'>$2100</td>
                    </tr>
                    <tr>
                        <td className='p-3 text-sm text-gray-700'> <a href="#" className='font-bold text-blue-500'>1000</a></td>
                        <td className='p-3 text-sm text-gray-700'>kring New office chair, mesh</td>
                        <td className='p-3 text-sm text-gray-700'>delevered</td>
                        <td className='p-3 text-sm text-gray-700'>15/10/2021</td>
                        <td className='p-3 text-sm text-gray-700'>$2100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;