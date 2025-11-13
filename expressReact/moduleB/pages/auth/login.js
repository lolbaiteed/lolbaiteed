import AuthLayout from "../components/authLayout";

function Login() {
    return (
        <><label htmlFor="name">Name</label><input id="name" className="rounded outline-2 outline-red-200 placeholder:text-center" placeholder="Enter your name"></input></>
    )
}

Login.getLayout = function getLayout(page) {
    return <AuthLayout title="Login">{page}</AuthLayout>
}
export default Login;