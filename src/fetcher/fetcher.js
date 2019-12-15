const url = 'http://localhost:3030';

const get = () => {
	try {
		return new Promise((resolve,reject)=>{
			const categoryUrl = `${url}/categories`;
			fetch(categoryUrl).then(res=>{
				return res.json();
			}).then(data=>{
				resolve(data);
			});
		});
	} catch (error) {
		console.log(error);
	}
};

const post = body => {
	console.log(body);
	try {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				mode: 'cors',
				body: JSON.stringify(body),
				headers: { 'Content-Type': 'application/json' },
			}).then(data => {
                // console.log(data.json());
				resolve(data.json());
			});
		});
	} catch (error) {
		console.log(error);
	}
};

const trim = originalQuery => {
    let newQuery = {};
    let tempQuery = {};
	try {
		if (originalQuery.store !== "all" || originalQuery.store !== "") {
			tempQuery.store = originalQuery.store;
		}
		if (
			originalQuery.subCategory !== "" ||
			originalQuery.subCategory !== undefined ||
			originalQuery.subCategory !== null
		) {
			tempQuery.subCategory = originalQuery.subCategory;
        }
        if(tempQuery !== {}){
            newQuery = {...tempQuery};
        }
	} catch (error) {
		console.log(error);
	}
	return newQuery;
};

export const fetcher = {
	get: get,
	post: post,
	trim: trim,
};
