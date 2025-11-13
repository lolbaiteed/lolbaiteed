endpoints {
    auth (POST) "/api/auth" [?X]
    users (POST) "/api/users" [?X]
}

pages {
    home "/" [?X]
    profile "/profile" [?X]
    register "/auth/register" [?X]
    login "/auth/login" [?X]
    admin dashboard "/admin/dashboard" [?X]
}