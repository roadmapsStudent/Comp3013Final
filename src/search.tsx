
export const  Search = (props:any) =>{
    const changeSearch = (event:any) => {
        props.setSearch(event.target.value);
    }

    return (
    <>
        <div className='Searchlabel'>Search:&nbsp;</div>
        <input id="Search" type="text" value={props.Search} onChange={changeSearch}/>
    </>)
};

export default Search;
