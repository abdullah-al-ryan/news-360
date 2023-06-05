import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [cateogries, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => console.log(data));
    } ,[])

    return (
        <div>
            <h4>All Category</h4>
        </div>
    );
};

export default LeftSideNav;