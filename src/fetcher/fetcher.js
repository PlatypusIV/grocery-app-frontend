const url = 'http://localhost:3030';

const get = () => {};

const post = body => {
	console.log(body);
	try {
		return new Promise((resolve, reject) => {
			fetch(url, { headers: { body: body } }).then(data=>{
                resolve(data);
            });
		});
	} catch (error) {
		console.log(error);
	}
};

const trim =(originalQuery)=>{
    let newQuery = {};
    try {
        
    } catch (error) {
        
    }
    return newQuery;
}

export const fetcher = {
	get: get,
    post: post,
    trim:trim
};
