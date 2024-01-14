import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import Admin from "../../../Layouts/Admin";

const Dashboard = () => {
    const { auth } = usePage().props
    return (
        <>
            <Head><title>Dashboard - Larastore</title></Head>
            <Admin>
                <div className="row mt-4">
                    <div className="col-12 col-md-12 col-lg-12 mb-4">
                        <div className="alert alert-success border-0 shadow-sm mb-0">
                            Selamat Datang, <strong>{auth.user.name}</strong>
                        </div>
                    </div>
                </div>
            </Admin>
        </>
    )
}

export default Dashboard