import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Search = ({ URL }) => {
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        Inertia.get(`${URL}?q=${search}`)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input group">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control border-0 shadow-sm" placeholder="type keywords and enter..." />
                    <span className="input-group-text-search border-0 shadow-sm">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
            </form>
        </>
    )
}

export default Search