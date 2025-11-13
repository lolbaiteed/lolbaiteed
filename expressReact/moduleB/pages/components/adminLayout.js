function AdminLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-white shadow p-4">
                <h1 className="text-xl font-bold text-gray-800">Admin Layout</h1>
            </header>

            <main className="flex-1 p-6">{children}</main>

            <footer className="bg-gray-200 text-center py-4 text-sm">
                @ {new Date().getFullYear()} Test App.
            </footer>
        </div>
    );
}

export default AdminLayout;