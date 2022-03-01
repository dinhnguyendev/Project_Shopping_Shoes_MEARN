import React from 'react';
import './loading.css';

function Loading() {
    return (
        <div class="loading">
            <div class="loading__content">
                <div class="loading__item"></div>
                <div class="loading__text"> Loading...</div>
            </div>
        </div>
    );
}

export default Loading;