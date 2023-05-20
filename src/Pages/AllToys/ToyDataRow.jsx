
import { FaArrowRight, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToyDataRow = ({ toys, rowNum, from, handelDelete, openModal, handelUpdate, handelToyId }) => {
    const {
        _id,
        toyName,
        sellerName,
        subCategory,
        price,
        availableQuantity,
    } = toys;
    return (

        <tr className={`${from && "text-center"}`}>
            <th>{rowNum + 1}</th>
            {/* <td>{pictureURL}</td> */}
            <td>{sellerName}</td>
            <td className='px-0'>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td>
                {
                    !from ?
                    <label htmlFor="my-modal"><button onClick={() => handelToyId(_id)} className="btn btn-primary flex">
                        <label htmlFor="my-modal">Details<FaArrowRight />
                        </label></button></label>
                        
                        :
                        <div className="btn-group">
                            
                            <input onClick={() => {
                                openModal()
                                handelUpdate(_id)
                            }} type="radio" name="options" data-title="Update" className="btn" />

                            <input onClick={() => handelDelete(_id)} type="radio" name="options" data-title="Delete" className="btn" />

                        </div>}
            </td>

        </tr>
        

    );
};

export default ToyDataRow;