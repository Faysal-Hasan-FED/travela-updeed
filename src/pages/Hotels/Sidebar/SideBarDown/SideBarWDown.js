import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';


const SideBarWDown = () => {
    const fullStar = <FontAwesomeIcon icon={faStar} />
    const emptyStar = <FontAwesomeIcon icon={faStarHalf}/> 
    //  can not find empty star

    return (
        <div style={{backgroundColor:'#f8faff',marginBottom:'50px'}} className="border rounded">
            <h3 className='ps-5 mt-3'  style={{fontWeight:'lighter'}}>STAR RATING</h3>
            <div className='p-5'>
                <div className='d-flex align-items-center mb-3'>
                    <input type="checkbox" name="" id="" />
                    <label style={{fontSize:'12px'}}  className='ms-4 text-danger' htmlFor="">
                    {fullStar} {fullStar} {fullStar} {fullStar} {emptyStar}
                    </label>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <input type="checkbox" name="" id="" />
                    <label style={{fontSize:'12px'}}  className='ms-4 text-danger' htmlFor="">
                    {fullStar} {fullStar} {fullStar} {emptyStar}
                    </label>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <input type="checkbox" name="" id="" />
                    <label style={{fontSize:'12px'}}  className='ms-4 text-danger' htmlFor="">
                    {fullStar} {fullStar}  {emptyStar}
                    </label>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <input type="checkbox" name="" id="" />
                    <label style={{fontSize:'12px'}}  className='ms-4 text-danger' htmlFor="">
                    {fullStar}  {emptyStar}
                    </label>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <input type="checkbox" name="" id="" />
                    <label style={{fontSize:'12px'}}  className='ms-4 text-danger' htmlFor="">
                     {emptyStar}
                    </label>
                </div>
            </div>
            
        </div>
    );
};

export default SideBarWDown;