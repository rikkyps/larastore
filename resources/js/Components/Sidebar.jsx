import React from "react";
import hasAnyPermission from './../Permissions'
import { Link, usePage } from "@inertiajs/inertia-react";

const Sidebar = () => {
    const { url } = usePage()

    return (
        <>
            <div className="list-group list-group-flush">
                {hasAnyPermission(['dashboard.index']) &&
                    <Link href="/account/dashboard" className={`${url.startsWith('/admin/dashboard') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-tachometer-alt me-2"></i> Dashboard</Link>
                }
                {hasAnyPermission(['colors.index']) &&
                    <Link href="/account/colors" className={`${url.startsWith('/admin/colors') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-palette me-2"></i> Colors</Link>
                }
                {hasAnyPermission(['categories.index']) &&
                    <Link href="/account/categories" className={`${url.startsWith('/admin/categories') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-folder me-2"></i> Categories</Link>
                }
                {hasAnyPermission(['products.index']) &&
                    <Link href="/account/products" className={`${url.startsWith('/admin/products') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-shopping-bag me-2"></i> Products</Link>
                }
                {hasAnyPermission(['transactions.index']) &&
                    <Link href="/account/transactions" className={`${url.startsWith('/admin/transactions') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-shopping-cart me-2"></i> Transactions</Link>
                }
                {hasAnyPermission(['sliders.index']) &&
                    <Link href="/account/sliders" className={`${url.startsWith('/admin/sliders') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-images me-2"></i> Sliders</Link>
                }
                {hasAnyPermission(['roles.index']) &&
                    <Link href="/account/roles" className={`${url.startsWith('/admin/roles') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-shield-alt me-2"></i> Roles</Link>
                }
                {hasAnyPermission(['permissions.index']) &&
                    <Link href="/account/permissions" className={`${url.startsWith('/admin/permissions') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-key me-2"></i> Permissions</Link>
                }
                {hasAnyPermission(['users.index']) &&
                    <Link href="/account/users" className={`${url.startsWith('/admin/users') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-users me-2"></i> Users</Link>
                }
            </div>
        </>
    )
}

export default Sidebar