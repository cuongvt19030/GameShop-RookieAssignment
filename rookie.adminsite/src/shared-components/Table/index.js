import React, { useEffect, useState } from 'react';
import './Table.css';
import Pagination from '../Pagination/Pagination';
import { DEFAULT_PAGE_LIMIT } from '../../Constants/paging';

export default function Table({ columns, children, page }) {

    //const [totalPage, setTotalPage] = useState(page.totalPages); 
    // useEffect(() =>{
    //     console.log(page.totalPages);
    // });

    return (

        <>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                columns.map((col, i) => (
                                    <th key={i}>
                                        {col.columnName}
                                    </th>
                                ))
                            }
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </table>
            </div>
            <div>
                {
                    (page && page.totalPages && page.totalPages > 1) && 
                    <Pagination 
                        currentPage={page.currentPage}
                        totalPages={page.totalPages}
                        changeCurrentPage={page.handleChange}
                        them="bottom-border"
                    />
                }
            </div>
        </>
    )
}
