export default async function ({
    store,
    // $cookies,
    redirect,
    $checkRoutes,
    // route
}) {
    if ($checkRoutes.shouldInitAuth()) {
        await store.dispatch('auth/initAuth')
        const isAuthenticated = store.getters['auth/isAuthenticated']
        if (!isAuthenticated) {
            // $cookies.set('login-callback', route.path, {
            //     path: '/',
            //     maxAge: 60 * 60
            // })
            return redirect('/auth')
        }
    }
}