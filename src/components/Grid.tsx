import React from "react";

export interface GridProps {
    children: React.ReactNode;
}

function Grid({ children }: GridProps) {
    return (
        <div className="w-full overflow-auto p-5 [&::-webkit-scroll]:hidden">
            <div className="flex flex-nowrap min-w-full gap-5">{children}</div>
        </div>
    )
}

export default Grid