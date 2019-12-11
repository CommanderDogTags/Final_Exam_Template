import * as React from 'react';

const Template: React.FC<TemplateProps> = props => {
    return (
        <>
            <h1 className="text-primary my-5 text-center">Template!</h1>
        </>
    );
};

interface TemplateProps {}

export default Template;