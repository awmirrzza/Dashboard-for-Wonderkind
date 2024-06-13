Campaign Performance Dashboard

This project is a Vue 3 application built with TypeScript that displays a dashboard summarizing the performance of multiple job vacancy marketing campaigns across different platforms (Meta, Google, TikTok). The focus is on key metrics such as impressions, clicks, applications, and cost per metric.
Features

    Campaign Selector: Allows the user to select a job vacancy from a dropdown menu to view its performance metrics.
    Metrics Display: For the selected job vacancy, displays cards summarizing the metrics per platform (impressions, clicks, applications, cost per impression, cost per click, cost per application).

Project Structure

    App.vue: Main component that sets up the layout.
    components/CampaignSelect.vue: Dropdown component to select a campaign.
    components/MetricsDisplay.vue: Displays metrics for the selected campaign.
    index.html: Includes necessary HTML structure and links.
    main.ts: Sets up the Vue application and includes necessary dependencies.

Getting Started:
    Node.js and npm
    Vue CLI

Installation:

       1-Clone the repository:
            git clone https://github.com/your-repo/campaign-dashboard.git
            cd campaign-dashboard
    
       2-Install dependencies:
            npm install
    
       3-Running the Application:
        
             1- Start the development server:
            npm run serve
        
            2-Open your browser and go to http://localhost:8080.
    
