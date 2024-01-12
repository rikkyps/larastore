import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

const Delete = ({ URL, id }) => {
    const destroy = async (id) => {
        //show sweet alert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                //delete
                Inertia.delete(`${URL}/${id}`)

                Swal.fire({
                    title: 'Success!',
                    text: 'Data deleted successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <>
            <button className="btn btn-danger btn-sm" onClick={destroy(id)}><i className="fa fa-trash"></i></button>
        </>
    )
}

export default Delete