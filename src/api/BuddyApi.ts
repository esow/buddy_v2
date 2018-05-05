import { User } from "../utils/mocks";
import { AuthSessionDTO } from "../store/model/auth";

class BuddyApi {

	private static devServer: String = "https://lolbuddy.herokuapp.com/api";

	// Get server statistics
	static getStats(): Promise<{ [key: string]: number }> {
		return BuddyApi.getRequest(`stats`);
	}

	// Get a Fortnite player
	static getUser(platform: string, username: string): Promise<User> {
		return BuddyApi.getRequest(`fortnite/${platform}/${username}`);
	}

	// Get a session id and token
	static getAuthTokens(): Promise<AuthSessionDTO> {
		return BuddyApi.getRequest(`auth/request`);
	}

	private static getRequest(url: string): Promise<any> {
		const request = new Request(`${BuddyApi.devServer}/${url}`, {
			method: "GET",
		});
		return BuddyApi.fetchParseJson(request);
	}

	private static fetchParseJson(request: Request) {
		return fetch(request).then(response => {
			return response.json();
		});

	}
}

export default BuddyApi;