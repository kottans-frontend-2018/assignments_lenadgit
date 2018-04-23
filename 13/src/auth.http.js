

//token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1M…6MTN9.LxuIEFTaCd70fN1QiI9DSInK_hPTFgX-z5hgqrm7mi8

//token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjQxODEwNDgsInVzZXJuYW1lIjoibGVuYXVzZXIiLCJ1dWlkIjoiNDg4MTA4M2MtOTRkOS00YTEzLWExMjUtZTUwODhkZThiNzhlIiwiZGV2aWNlX3V1aWQiOiJmYTc4OGNhNS1lYmVhLTRkZjEtODk0Zi0wYWVmNWY1M2Y3NjgiLCJzdG9yZV9pZCI6MTN9.LxuIEFTaCd70fN1QiI9DSInK_hPTFgX-z5hgqrm7mi8
	class authHTTP {
		constructor() {
			this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjQxODEwNDgsInVzZXJuYW1lIjoibGVuYXVzZXIiLCJ1dWlkIjoiNDg4MTA4M2MtOTRkOS00YTEzLWExMjUtZTUwODhkZThiNzhlIiwiZGV2aWNlX3V1aWQiOiJmYTc4OGNhNS1lYmVhLTRkZjEtODk0Zi0wYWVmNWY1M2Y3NjgiLCJzdG9yZV9pZCI6MTN9.LxuIEFTaCd70fN1QiI9DSInK_hPTFgX-z5hgqrm7mi8';
		}

		get(url){
			return fetch(url, {
				method: 'GET',
				headers: new Headers({
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${this.token}`
				})
			}).then(
			response => Promise.resolve(response.json()),
			response => Promise.reject(response.statusCode)
			)			
		}
	}

export const AUTH_HTTP = new AuthHTTP();	