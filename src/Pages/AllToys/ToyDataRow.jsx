
import { useContext } from 'react';
import { FaArrowRight, FaPen } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const ToyDataRow = ({ toys, rowNum, from, handelDelete, handelUpdate, handelToyId }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
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
                        user ?
                            <button onClick={() => handelToyId(_id)} >
                                <label htmlFor="my-modal" className='flex btn btn-primary gap-3'>Details<FaArrowRight />
                                </label></button>
                            :
                            <Link to="/login" state={{ from: location }} onClick={() => toast('Login first to see details')} className="btn btn-primary flex">
                                Details<FaArrowRight />
                            </Link>

                        :
                        <div className="btn-group">

                            <button onClick={() => handelUpdate(_id)} className="btn"><label htmlFor="my-modal-update" className='flex gap-3'>Update</label></button>
                            

                            <input onClick={() => handelDelete(_id)} type="radio" name="options" data-title="Delete" className="btn" />

                        </div>}
            </td>

        </tr>


    );
};

export default ToyDataRow;