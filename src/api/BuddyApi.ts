class BuddyApi {

	static devServer: String = "https://lolbuddy.herokuapp.com/api";

	static getStats() {
		const request = new Request(`${BuddyApi.devServer}/stats`, {
			method: "GET",
		});

		return BuddyApi.fetchWithError(request);
	}

	static fetchWithError(request: Request) {
		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}
}

export default BuddyApi;