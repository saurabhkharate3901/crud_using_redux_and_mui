import React from 'react'
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { deleteData, fetchData } from '../feature/UserDeatialsSlice';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { Box, Pagination } from '@mui/material';
import CustomPagination from '../pagination/Pagination'; 
import { useState } from 'react';
import Navbar from './Navbar';


function Data() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const value = useSelector(state => state?.data?.data)
    console.log('value', value)

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const [searchTerm, setSearchTerm] = useState('');

    const dataFilter = value?.filter(item =>
        item?.name.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        item?.email.toLowerCase().includes(searchTerm?.toLowerCase())
    )
    console.log('searchTerm', searchTerm)


    const paginatedData = dataFilter?.slice((page - 1) * rowsPerPage, page * rowsPerPage);



    const handlePageChange = (event, value) => {
        setPage(value);
    }

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event?.target?.value);
        setPage(1);
    }

    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);
    }

    const deleteRecord = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this record?");
        if (isConfirmed) {
            dispatch(deleteData(id))
                .then(() => {
                    dispatch(fetchData());
                });
        }
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Update/Delete',
            selector: row => <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        size="small"
                        onClick={() => { navigate(`/update/${row.id}`, { state: { data: row } }) }}
                    >
                        Update
                    </Button>


                    <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        size="small"
                        onClick={() => deleteRecord(row?.id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        },
    ];


    useEffect(() => {
        if (dataFilter?.length > 0 && page > Math.ceil(dataFilter?.length / rowsPerPage)) {
            setPage(1); 
        }
    }, [dataFilter, page, rowsPerPage]);

    useEffect(() => {
       dispatch(fetchData())
    //    console.log("UserData", UserData)
    }, [dispatch])

    return (
        <>
            <Box>
                <Navbar onSearch={handleSearch} />
            </Box>
            <Box>
                <DataTable
                    columns={columns}
                    data={paginatedData}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <CustomPagination
                    count={Math.ceil(dataFilter?.length / rowsPerPage)}
                    page={page}
                    onPageChange={handlePageChange}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            </Box>
        </>
    )
}

export default Data