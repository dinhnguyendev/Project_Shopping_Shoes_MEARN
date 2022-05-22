import React, { useState } from 'react';
import './category.css';
const Category = () => {
    const [name, setName] = useState('');
    const handleSubmit = () => {

    }
    return (
        <div className='category'>
            <div className="category__heading">
                Thêm Thương hiệu
            </div>
            <div className="category__center">
                <div className="category__big">
                    <div className="category__flex">
                        <div className="category__flex__name">
                            Tên Thương hiệu :
                        </div>
                        <div className="category__flex__input">
                            <input placeholder='nhập tên thương hiệu' value={name} onChange={e => setName(e.target.value)} type="text" className="category__input__name" />
                        </div>
                    </div>
                    <div className="category__button">
                        <button onClick={handleSubmit} className="category__btn">Thêm Thương hiệu</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Category;