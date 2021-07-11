# Quick current view

## Desktop view 
![Screenshot 2021-07-11 at 6 26 26 PM](https://user-images.githubusercontent.com/25490780/125195981-b9220e80-e275-11eb-8a4b-13c76d7ad5b2.png)

## Mobile view
![Screenshot 2021-07-11 at 6 25 32 PM](https://user-images.githubusercontent.com/25490780/125195954-9db70380-e275-11eb-84fe-83caa435283b.png)


## Updates 

- The user data is dynamic combined from both APIs (search and by id)
- The page is responsive and so are the cards 
- DISTANCE & ACTIVITY are active and searches with sorting, Romeo_logo & DISCOVER fetches search of total 599 users. 
- Showing these user info:
    - Name
    - Image and buffer image while loading or if image doesn't exists
    - Age
    - Distance
    - Online Status: Red for offline, Green for onine, Heart-Red for date
    - Duration of last login in (Months, Days, Hours, Seconds) based on when was the last login done. (moment used)
    - User Profile Popup: Shows other details of the user
        - Personal info
        - Sexual info 


- Could be added 
   - is_plus value
   - Pagination or load on scroll of users list 





## Available Scripts

In the project directory, you can run:

### `npm start`

API url is added to `package.json` as `"proxy":"http://localhost:3000"`
