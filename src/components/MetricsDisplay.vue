<template>
  <!-- Display the metrics in a grid layout -->
  <div class="row">
    <!-- Check if a campaign is selected -->
    <div v-if="selectedCampaign" class="col-12">
      <div class="row">
        <!-- Loop through each platform and display metrics in a card -->
        <div class="col-sm-12 col-md-6 col-lg-4" v-for="platform in selectedCampaign.platforms" :key="platform.name">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ platform.name }}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Impressions: {{ platform.metrics.impressions }}</li>
                <li class="list-group-item">Clicks: {{ platform.metrics.clicks }}</li>
                <li class="list-group-item">Applications: {{ platform.metrics.applications }}</li>
                <li class="list-group-item">Cost per Impression: {{ platform.metrics.costPerImpression }}</li>
                <li class="list-group-item">Cost per Click: {{ platform.metrics.costPerClick }}</li>
                <li class="list-group-item">Cost per Application: {{ platform.metrics.costPerApplication }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Show a message if no campaign is selected -->
    <div v-else>
      <p class="text-center">Please select a campaign to see its metrics.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Define the structure of Metrics and Platform
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

// Define the structure of Campaign
interface Campaign {
  vacancy: string;
  location: string;
  platforms: Platform[];
}

export default defineComponent({
  name: 'MetricsDisplay',
  props: {
    // The selected campaign passed from the parent
    selectedCampaign: {
      type: Object as PropType<Campaign | undefined>,
      required: false
    }
  }
});
</script>
