import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="433" cy="37" r="15"/>
            <rect x="552" y="532" rx="2" ry="2" width="140" height="10"/>
            <circle cx="140" cy="140" r="140"/>
            <circle cx="437" cy="181" r="128"/>
            <rect x="0" y="284" rx="5" ry="5" width="280" height="30"/>
            <rect x="2" y="323" rx="6" ry="6" width="280" height="84"/>
            <rect x="1" y="417" rx="5" ry="5" width="100" height="45"/>
            <rect x="155" y="417" rx="23" ry="23" width="130" height="45"/>
        </ContentLoader>
    )
}





    export default LoadingBlock;