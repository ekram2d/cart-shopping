import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utitilies/databse';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Userorder = () => {
      const [orderdata, setOrderData] = useState([]);
      const [total, setTotal] = useState(0);
      const [url] = useUrl();
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();
      useEffect(() => {
            const data = getShoppingCart();
            if (Array.isArray(data)) {
                  setOrderData(data);
                  const total = data.reduce((total, orderItem) => {
                        return total + orderItem.foodPrice * orderItem.quantity;
                  }, 0);
                  setTotal(total);
            } else {
                  console.error("Error: getShoppingCart() did not return an array.");
            }
      }, [loading]);

      const removeItem = (foodId) => {
            // console.log(foodId)
            removeFromDb(foodId);
            const updatedOrderData = orderdata.filter(item => item.foodId !== foodId);
            setOrderData(updatedOrderData);
            const updatedTotal = updatedOrderData.reduce((total, orderItem) => {
                  return total + orderItem.foodPrice * orderItem.quantity;
            }, 0);
            setTotal(updatedTotal);
            toast.success("Item removed from the cart.", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
            });

            setLoading(!loading);
      };

      return (
            <div className="pt-6">
                  <ToastContainer />
                  <h2 className='text-center uppercase font-bold mb-2'>Your Cart</h2>
                  <hr />
                  <div className="bg-white p-4 rounded shadow-2xl">
                        <table className="w-full">
                              <thead>
                                    <tr className="bg-gray-100">
                                          <th className="border px-4 py-2">Order Name</th>
                                          <th className="border px-4 py-2">Price</th>
                                          <th className="border px-4 py-2">Quantity</th>
                                          <th className="border px-4 py-2">Remove</th>
                                    </tr>

                              </thead>
                              <tbody>
                                    {orderdata.map((orderItem, index) => (
                                          <tr key={index}>
                                                <td className="border px-4 py-2">{orderItem.Food_name}</td>
                                                <td className="border px-4 py-2">${orderItem.foodPrice}</td>
                                                <td className="border px-4 py-2">{orderItem.quantity}</td>
                                                <td className="border px-4 py-2">
                                                      <button
                                                            onClick={() => removeItem(orderItem.foodId)}
                                                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors focus:ring focus:ring-red-300"
                                                      >
                                                            Remove
                                                      </button>
                                                </td>
                                          </tr>
                                    ))}
                                    <tr className="bg-gray-300 font-semibold">
                                          <td className="border px-4 py-2">Total</td>
                                          <td className="border px-4 py-2"></td>
                                          <td className="border px-4 py-2">${total}</td>
                                          <td className="border px-4 py-2"></td>
                                    </tr>
                              </tbody>
                              <Link to='/'> <button className='btn btn-sm mt-4 bg-blue-600 p-2 font-bold uppercase text-white'>{'<----'}Back</button></Link>
                        </table>
                  </div>

            </div>
      );
};

export default Userorder;
