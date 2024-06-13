import { createStore } from 'vuex';

interface Metrics {
  impressions: number;
  clicks: number;
  applications: number;
  costPerImpression: number;
  costPerClick: number;
  costPerApplication: number;
}

interface Platform {
  name: string;
  metrics: Metrics;
}

interface Campaign {
  vacancy: string;
  location: string;
  platforms: Platform[];
}

export interface State {
  campaigns: Campaign[];
}

const store = createStore<State>({
  state: {
    campaigns: []
  },
  mutations: {
    setCampaigns(state, campaigns: Campaign[]) {
      state.campaigns = campaigns;
    }
  },
  actions: {
    async fetchCampaigns({ commit }) {
      const response = await fetch('/campaigns.json');
      const data = await response.json();
      commit('setCampaigns', data.campaigns);
    }
  }
});

export default store;
