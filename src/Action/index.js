export const settablenumber =(value)=>async(dispatch)=>{
    dispatch({
        type:"SETTABLENUMBER",
        payload:value
    })
}

export const resettablenumber =()=>async(dispatch)=>{
    dispatch({
        type:"RESETTABLENUMBER"
    })
}


export const setfilter =(value)=>async(dispatch)=>{
    dispatch({
        type:"SETFILTER",
        payload:value
    })
}


export const resetfilter =()=>async(dispatch)=>{
    dispatch({
        type:"RESETFILTER"
    })
}


export const addorder = (id, prize, name, table_number, image) => async (dispatch) => {
    dispatch({
        type: "ADD_ORDER",
        payload: {
            id: id,
            prize: prize,
            name: name,
            table_number: table_number,
            image: image // ✅ Add image to payload
        }
    });
};

