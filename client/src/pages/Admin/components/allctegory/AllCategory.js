import React from 'react';
import './allcategory.css';
const AllCategory = () => {
    return (
        <div className='category__all'>
            <div className="category__all__heading">
                Thương hiệu
            </div>
            <div className="category__all__center">
                <div className="category__all__big">
                    <table>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Tên danh mục</th>
                            <th>Hành động</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td><i class="fal fa-layer-plus category__all__icon"></i></td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllCategory;