 const Filter=({category,filter})=>{
    return (
        <div>
        <label>Filter</label>
        <select onChange={(e)=>{filter(e.target.value)}}>
            {
                category.map((cat,index)=>{
                    return (
                    <option key={index} value={cat}>{cat}</option>
                    );
                })
            }
           
        </select>
        </div>
    )
};
export default Filter;