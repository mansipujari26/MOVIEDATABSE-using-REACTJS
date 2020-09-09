import React from 'react'


function Search({ handleInput , search})
{
    return (
        <section className="searchbox-warp"> 
            <input type="text"
             placeholder="Search here" 
             className="searchbox" 
             onChange={handleInput} onKeyPress={search} />
        </section>
    ) 
}

export default Search 