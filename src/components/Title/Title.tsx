import React from "react";

interface TitleProps {
	text: string;
	className?: string;
}

export const Title: React.FC<TitleProps> = ({ text, className = "" }) => {
	return (
		<h1
			className={`
                text-3xl font-bold
                text-slate-800 dark:text-slate-100
                ${className}
            `}
		>
			{text}
		</h1>
	);
};
