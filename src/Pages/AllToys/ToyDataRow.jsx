import React from 'react';

const ToyDataRow = ({toys, rowNum}) => {
    const {
        toyName,
        sellerName,
        subCategory,
        price,
        availableQuantity,
        pictureURL,
       } = toys;
    return (
        
            <tr>
        <th>{rowNum + 1}</th>
        {/* <td>{pictureURL}</td> */}
        <td>{toyName}</td>
        <td>{sellerName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
      </tr> 
       
    );
};

export default ToyDataRow;