const url = "localhost:3030";

const get =()=>{

}

const post=(body)=>{
    console.log(body);
    try {
        
    } catch (error) {
        console.log(error);
    }
}

export const fetcher = {
    get:get,
    post:post
}