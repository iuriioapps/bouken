import React from 'react';

export type ButtonProps = {
    title: string;
};

const Button = (props: ButtonProps): JSX.Element => {
    return (
        <button>
            {props.title}
        </button>
    );
};

export default Button;
