import React from 'react';

interface MaxWidthProps {
    children?: React.ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ children }) => {
    return (
        <div className="md:max-w-6xl mx-auto px-4 lg:px-0">
            {children}
        </div>
    );
};

export default MaxWidth;
