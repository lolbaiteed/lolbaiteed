const react = require('react');

function Profile({ user }) {
    if (!user) return <div>Not logged in</div>;
    return (
        <div>
            <h1>Profile</h1>
            <p>{user.name} - {user.email}</p>
        </div>
    );
}

async function getServerSideProps(context) {
    const cookie = context.req.headers.cookie || '';

    const token = cookie.split(';').map(c=>c.trim()).find(c=>c.startsWith('token='))?.split('=')[1];
    if (!token) {
        return { props: {user: null} };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) return { props: { user: null } };
    const data = await res.json();
    return { props: { user: data.user } };
}

module.exports = Profile;
module.exports.getProps = getServerSideProps;