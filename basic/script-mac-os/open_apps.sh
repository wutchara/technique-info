#!/bin/bash

# Open applications
open -a "Visual Studio Code"
# open -a "Microsoft Edge"
# open -a "Google Chrome"
open -a "Postman"
open -a "Fork"
open -a "Notes"
open -a "Terminal"
open -a "Brave"

# # Define the applications you want to open
# apps=("Visual Studio Code" "Google Chrome" "Postman" "Fork" "Notes" "Terminal" "Brave")

# # Open each application
# for app in "${apps[@]}"; do
#     open -a "$app"
# done



# For MS Edge
# Define the URLs for each workspace
workspace1="https://www.example1.com"
workspace2="https://www.example2.com"
workspace3="https://www.example3.com"

# Open each workspace in a new Edge window
for workspace in "$workspace1" "$workspace2" "$workspace3"; do
    open -a "Microsoft Edge" "$workspace"
done


# For Google chrome
# Define the profile name
profile="Profile 1"

# Open Chrome with the specified profile
open -na "Google Chrome" --args --profile-directory="$profile"
