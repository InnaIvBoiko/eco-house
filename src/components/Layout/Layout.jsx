import { Suspense } from 'react';
// import Navigation from '../Navigation/Navigation';

export default function Layout({children}) {
    return (
        <div>
            {/* <Navigation /> */}
            <Suspense fallback={<h3>Please wait loading page...</h3>} >
                {children}
            </Suspense>
        </div>
    );
}