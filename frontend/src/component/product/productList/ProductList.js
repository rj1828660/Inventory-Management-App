import React, { useEffect, useState } from 'react'
import { SpinnerImg } from '../../loader/Loader'
import "./ProductList.scss" 
import{FaEdit,FaTrashAlt} from "react-icons/fa"
import {AiOutlineEye} from"react-icons/ai"
import Search from '../../search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_PRODUCTS, selectFilteredProducts } from '../../../redux/features/products/filterSlice'
import ReactPaginate from 'react-paginate';
 
const ProductList = ({products,isLoading}) => {
    const [search,setSearch]=useState("");
    const filteredProducts=useSelector(selectFilteredProducts)

    const dispatch=useDispatch()
    

    const shortenText=(text,n)=>{
       if(text.length>n){
        const shortendText=text.substring(0,n).concat("...")
        return shortendText;
       }
       return text;
    };

   //Begin Pagination
  
    const [currentItems,setCurrentItems]=useState([]);
    const [pageCount,setPageCount]=useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=2;
    
    useEffect(()=>{
        //fetch items from another resources
        const endOffset = itemOffset + itemsPerPage;
        
         setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
         setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
          
    },[itemOffset,itemsPerPage,filteredProducts])
   // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };  
   
   useEffect(()=>{
     dispatch(FILTER_PRODUCTS({products,search}))
   },[products,search,dispatch]);
  return (
    <div className='product-list'>
        <hr/>
        <div className='table'>
            <div className='--flex-between--flex-dir-column'>
             <span>
                <h3>Inventory Items</h3>
             </span>
             <span>
                <Search value={search} onChange={(e)=>setSearch(e.target.value)}/>
             </span>
            </div>
            {isLoading&&<SpinnerImg/>}
            <div className='table'>
                {!isLoading&&products.length===0?(
                    <p>-- No Products Found,Please add a Product...</p>):(
                        <table>
                            <thead>
                                <tr>
                                    <th>S.NO.</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Value</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   currentItems.map((product,index)=> {
                                            const {_id,name,category,price,quantity}=product;

                                            return (
                                                <tr key={_id}>
                                                    <td>{index+1}</td>
                                                    <td>
                                                        {shortenText(name,16)}
                                
                                                    </td>
                                                    <td>{category}</td>
                                                    <td>{"$"}{price}</td>
                                                    <td>{quantity}</td>
                                                    <td>{"$"}{price*quantity}</td>
                                                    <td className='icons'>
                                                        <span>
                                                            <AiOutlineEye size={25}
                                                            color={"purple"}/>

                                                        </span>
                                                        <span>
                                                            <FaEdit size={20}
                                                            color={"green"}/>
                                                            
                                                        </span>
                                                        <span>
                                                            <FaTrashAlt size={20}
                                                            color={"red"}/>
                                                            
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
            <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activePage"
      />
        </div>
    </div>
  )
}

export default ProductList