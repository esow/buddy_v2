import { User } from "../utils/mocks";
class BuddyApi {

	static devServer: String = "https://lolbuddy.herokuapp.com/api";

	static getStats(): Promise<{ [key: string]: number }> {
		const request = new Request(`${BuddyApi.devServer}/stats`, {
			method: "GET",
		});

		return BuddyApi.fetchWithError(request);
	}

	static getUser(platform: string, username: string): Promise<User> {
		const request = new Request(`${BuddyApi.devServer}/fortnite/${platform}/${username}`, {
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