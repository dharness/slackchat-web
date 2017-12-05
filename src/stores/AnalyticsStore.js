import axios from 'axios'
import { observable, action } from 'mobx';


const API_URL = 'http://localhost:9090/api'

class AnalyticsStore {
  @observable allChats = [];
  @observable allVisitors = [];
  @observable missedChats = [];

	@action async fetch(teamId) {
    const response = await axios.get(`${API_URL}/visitors/${teamId}`)
    this.allChats = response.allChats;
    this.allVisitors = response.allVisitors;
    this.missedChats = response.missedChats;
	}
}

export default new AnalyticsStore();