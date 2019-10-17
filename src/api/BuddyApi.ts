import { AuthSessionDTO } from "../store/auth/types";


class BuddyApi {

	private static devServer: String = "https://lolbuddy.herokuapp.com/api";

	// Get server statistics
	static getStats(): Promise<{
		players_online: {
			[key: string]: {
				[key: string]: number
			}
		}
	}> {
		return BuddyApi.getRequest(`stats`);
	}

	// Get a Fortnite player
	static getUser(platform: string, username: string): Promise<{ data: any }> {
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
