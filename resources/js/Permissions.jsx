import { usePage } from "@inertiajs/inertia-react";

const hasAnyPermission = ( permissions ) => {
    const { auth } = usePage().props
    let allPermissions = auth.permissions
    let hasPermission = false
    permissions.forEach(function (item) {
        if (allPermissions[item]) hasPermission = true
    })

    return hasPermission;
}

export default hasAnyPermission