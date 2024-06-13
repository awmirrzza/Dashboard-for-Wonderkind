<template>
  <div>
    <!-- Navigation bar at the top -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <!-- Brand name -->
        <a class="navbar-brand" href="#">Campaign Dashboard</a>
        <!-- Button for mobile view -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapsible menu items -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Main content area -->
    <div class="container mt-5">
      <!-- Page title -->
      <h1 class="mb-4 text-center">Campaign Performance Dashboard</h1>
      <!-- Campaign Selector Component -->
      <CampaignSelector :campaigns="campaigns" v-model:selectedVacancy="selectedVacancy" />
      <!-- Metrics Display Component -->
      <MetricsDisplay :selectedCampaign="selectedCampaign" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import CampaignSelector from './components/CampaignSelector.vue';
import MetricsDisplay from './components/MetricsDisplay.vue';
import { State } from './store';

export default defineComponent({
  components: {
    CampaignSelector,
    MetricsDisplay
  },
  setup() {
    // Get the Vuex store
    const store = useStore<State>();
    // Variable for the selected campaign
    const selectedVacancy = ref<string>('');

    // Get the list of campaigns from the store
    const campaigns = computed(() => store.state.campaigns);

    // Get details of the selected campaign
    const selectedCampaign = computed(() =>
      campaigns.value.find(campaign => campaign.vacancy === selectedVacancy.value)
    );

    // Load campaigns when the component is mounted
    onMounted(() => {
      store.dispatch('fetchCampaigns');
    });

    return {
      campaigns,
      selectedVacancy,
      selectedCampaign
    };
  }
});
</script>

<style>
/* Style for the body */
body {
  background-color: #f0f2f5;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Style for the navigation bar */
.navbar {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Style for the container */
.container {
  max-width: 1200px;
}

/* Style for the page title */
h1 {
  font-size: 2.5rem;
  font-weight: 300;
  color: #333;
}

/* Style for the cards */
.card {
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  border-radius: 0.75rem;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Padding inside the card */
.card-body {
  padding: 1.5rem;
}

/* Style for list items inside the card */
.list-group-item {
  border: none;
  padding: 0.75rem 1.25rem;
}

/* Responsive styles for small screens */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
