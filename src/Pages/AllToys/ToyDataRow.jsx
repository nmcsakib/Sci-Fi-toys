import React from 'react';
import { Link } from 'react-router-dom';

const ToyDataRow = ({toys, rowNum}) => {
    const {
        _id,
        toyName,
        sellerName,
        subCategory,
        price,
        availableQuantity,
       } = toys;
    return (
        
            <tr>
        <th>{rowNum + 1}</th>
        {/* <td>{pictureURL}</td> */}
        <td>{sellerName}</td>
        <td className='px-0'>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
            <Link to={`/toy/${_id}`}  htmlFor="my-modal-3"  className="btn btn-primary">Details</Link></td>
          
      </tr> 
       
    );
};

export default ToyDataRow;