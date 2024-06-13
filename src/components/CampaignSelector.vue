<template>
  <!-- A dropdown menu to select a campaign -->
  <div class="mb-4">
    <label for="campaignSelector" class="form-label">Select Campaign</label>
    <select v-model="selectedVacancy" @change="onChange" class="form-select form-select-lg" id="campaignSelector">
      <!-- List each campaign as an option in the dropdown -->
      <option v-for="campaign in campaigns" :key="campaign.vacancy" :value="campaign.vacancy">
        {{ campaign.vacancy }} - {{ campaign.location }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Define the structure of a Campaign
interface Campaign {
  vacancy: string;
  location: string;
}

export default defineComponent({
  name: 'CampaignSelector',
  props: {
    // List of campaigns passed from the parent
    campaigns: {
      type: Array as PropType<Campaign[]>,
      required: true
    },
    // Currently selected campaign
    selectedVacancy: {
      type: String,
      required: true
    }
  },
  emits: ['update:selectedVacancy'],
  setup(props, { emit }) {
    // Handle change event to update selected campaign
    const onChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      emit('update:selectedVacancy', target.value);
    };

    return {
      onChange
    };
  }
});
</script>
