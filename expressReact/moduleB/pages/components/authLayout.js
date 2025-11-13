function AuthLayout({ children, title }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 justify-center items-center">
            <main className="">
                <div className="min-w-[50vh] min-h-[40vh] bg-gray-400 text-center rounded">
                    <div className="flex text-center items-center justify-center p-4 bg-red-100">
                    <h1>{title}</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center py-25 text-center">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AuthLayout;