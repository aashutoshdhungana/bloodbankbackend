import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminCount from './AdminCount';
import AdminTabs from './AdminTabs';
const AdminDashboard = () => {
    const [bloodCount, setBloodCount] = useState({
        'O+' : 0,
        'O-' : 0,
        'A+' : 0,
        'A-' : 0,
        'B+' : 0,
        'B-' : 0,
        'AB+' : 0,
        'AB-' : 0
    });

    const loadCount = async () => {
        let response = await axios.get('api/bloodtype');
        if (response && response.status == 200) {
            response.data.forEach(x => {
                setBloodCount(prevBloodCount => ({
                    ...prevBloodCount,
                    [x.type]: x.units
                }));
            })
        }
    }

    useEffect(() => {
        loadCount();
    }, [])

    return <>
        <AdminCount bloodCount={bloodCount}/>
        <AdminTabs loadCount={loadCount}/>
    </>
}

export default AdminDashboard