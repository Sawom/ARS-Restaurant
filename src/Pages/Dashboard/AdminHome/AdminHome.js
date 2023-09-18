import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const AdminHome = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // useAxiosSecure diye backend theke data load kore niye ashtechi
    const {data: stats = {} } = useQuery({
        queryKey : ['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    // chart er data from backend
    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })
    console.log('data',chartData)
    // graph from rechart... CustomShapeBarChart, example e ache demo
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='container '>
            <h1 className='text-2xl mx-5'> Welcome <span className='text-blue-600'> {user.displayName}</span>  to Admin Home!</h1>
            {/* stats */}
            <div className="stats shadow">
                {/* revenue */}
                <div className="stat place-items-center">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value"> ${stats.revenue} </div>
                </div>
                {/* users */}
                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary"> {stats.users} person</div>
                </div>
                {/* menu items */}
                <div className="stat place-items-center">
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value"> {stats.products} </div>
                </div>
                {/* orders */}
                <div className="stat place-items-center">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value"> {stats.orders} </div>
                </div>
            
            </div>
            {/* charts */}
            
            <div className='flex'>
                 <div className="">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                    
                </div>
                
            </div>
        </div>
    );
};

export default AdminHome;