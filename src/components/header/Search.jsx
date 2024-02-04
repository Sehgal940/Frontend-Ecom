import React, { useState, useEffect } from 'react';
import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

const SearchCon = styled(Box)(({ theme }) => ({
  background: '#fff',
  marginLeft: '30px',
  minWidth: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
  },
}));

const InputSer = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;

const SearchResults = styled(List)(({theme})=>({
  position:'fixed',
  top: '60px',
  left: '204px',
  minWidth:'390px', 
  overflowY:'auto',
  background: 'white',
  border:'1px solid black',
  zIndex: 999,
  [theme.breakpoints.down('sm')]: {
  left:'0px'
  },
}))

function Search() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts.products);
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((val) =>
    val.title.longTitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchCon style={{ marginTop: '2px' }}>
        <InputSer name="query" onChange={handleQuery} placeholder={'Search for products & more'} />
        <SearchIcon style={{ color: 'blue', fontSize: '1.5rem', cursor: 'pointer' }} />
      </SearchCon>
      {query.length > 0 ?(
        <SearchResults>
          {filteredProducts.map((product) => (
            <NavLink style={{textDecoration:'none'}} to={`/productDetails/${product.id}`}><ListItem style={{color:'black',cursor:'pointer'}} key={product.id}>{product.title.longTitle}</ListItem></NavLink>
          ))}
        </SearchResults>
      ):''}
    </>
  );
}

export default Search;
