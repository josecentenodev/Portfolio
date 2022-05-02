import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <div className="bg-gray-50 dark:bg-slate-700 transition-all">
            {children}
        </div>
    )
}

export default Background;