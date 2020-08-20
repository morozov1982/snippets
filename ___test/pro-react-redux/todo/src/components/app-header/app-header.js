import React from 'react';

import './app-header.css';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className='app-header d-flex'>
            <h1>Дела-заботы</h1>
            <h2>Ещё { toDo } сделать, { done } завершено</h2>
        </div>
    );
};

export default AppHeader;