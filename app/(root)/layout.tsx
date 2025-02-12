import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='root-container'>
            <div className='mx-auto max-w-7xl'>
                <p>Header</p>
                <div className='mt-20 pb-20'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default layout;