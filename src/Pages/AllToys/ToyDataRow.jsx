
import { FaArrowRight, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToyDataRow = ({ toys, rowNum, from, handelDelete, openModal, handelUpdate }) => {
    const {
        _id,
        toyName,
        sellerName,
        subCategory,
        price,
        availableQuantity,
    } = toys;
    return (

        <tr className='text-center'>
            <th>{rowNum + 1}</th>
            {/* <td>{pictureURL}</td> */}
            <td>{sellerName}</td>
            <td className='px-0'>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td className='text-center'>
                {
                    !from ?
                        <Link to={`/toy/${_id}`} htmlFor="my-modal-3" className="btn btn-primary flex">Details<FaArrowRight /></Link>
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