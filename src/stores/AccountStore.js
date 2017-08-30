import axios from 'axios'
import { observable, action } from 'mobx';


const API_URL = 'http://localhost:9090/api'

class AccountStore {
	@observable authToken = '';
	@observable id = '';
	@observable slack = null;

	@action async fetch(accountId) {
		const response = await axios.get(`${API_URL}/account/${accountId}`)
		this.slack = response.data.slack;
		this.id = accountId;
		const { token, id } = response.data;
	}

	@action async removeSlackAccount() {
		const response = await axios.post(`${API_URL}/slack/revoke`, { id: this.id })
		if (response.status === 200) {
			this.slack = null;
		}
	}
}

export default new AccountStore();