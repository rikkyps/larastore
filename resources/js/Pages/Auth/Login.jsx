import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head, usePage } from "@inertiajs/inertia-react";

const Login = () => {
    const { errors } = usePage().props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()

        Inertia.post('/login', {
            email: email,
            password: password,
        })
    }

    return (
        <>
            <Head>
                <title>Login - Lara Store</title>
            </Head>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-100">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo.png" width={'60'} />
                            <h4><strong>LARA</strong> STORE</h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">LOGIN ACCOUNT</h6>
                                    <hr />
                                </div>
                                <form onSubmit={loginHandler}>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && <div className="alert alert-danger mt-1">
                                            {errors.email}
                                        </div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Password</label>
                                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {errors.password && <div className="alert alert-danger mt-1">
                                            {errors.password}
                                        </div>}
                                    </div>
                                    <button type="submit" className="btn btn-success shadow-sm rounded-sm px-4 w-100 mt-3">Login</button>
                                </form>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Belum punya akun? <Link href="/register">Register!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login