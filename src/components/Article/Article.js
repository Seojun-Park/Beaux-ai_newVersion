import React from 'react';

const Article = (props) => {
    return (
        <ul>
            { props.list.map((art, index) => (
                <li key={index}>
                    <div>
                        {art.title}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Article;