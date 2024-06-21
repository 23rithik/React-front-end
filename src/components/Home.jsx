
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650, border: '2px solid rgba(0, 0, 0, 0.2)' }} aria-label="simple table"   style={{marginTop:"2%"}}>
                <TableHead style={{backgroundColor:"lightblue"}}>
                    <TableRow>
                        <TableCell align='center'>ID</TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell align='center'>{item.id}</TableCell>
                            <TableCell align='center'>{item.name}</TableCell>
                            <TableCell align='center'>{item.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Home;

