# REST API Backend Endpoints
## Endpoints
All the following endpoints should be prefixed with /backend

#### Registration
* `/api/auth/registration/` POST: Register a new user by asking for an email (send email validation code)
* `/api/registration/validation/` PATCH: Validate a new registered user with a validation code sent by email

#### Authorization
* `/api/auth/token/` POST: Get a new JWT by passing username and password
* `/api/auth/token/refresh/` POST: Get a new JWT by passing an old still valid refresh token
* `/api/auth/token/verify/` POST: Verify a token by passing the access token

#### Post
* `/api/social/posts/` GET,POST: user can make a new post by sending post data, or get all posts
* `/api/social/posts/<int:post_id>/` GET, PATCH, DELETE: get a specific post by ID and display all the information about that post. Update or delete it if logged in user is the original poster or admin
* `/api/social/posts/toggle-like/int:post_id>/` POST: Toggle like a post
* `/api/social/posts/likes/` GET: the list of the posts the user likes
* `/api/social/posts/me/` GET: lists all the posts of logged in user
* `/api/social/posts/following/` GET: lists all the posts of of users the logged in user is following in chronological order
* `/api/social/posts/friends/` GET: lists all the posts of the logged in user’s friends in chronological order

#### User
* `/api/users/` GET: Get all the users
* `/api/users/<int:user_id>/` GET: Get specific user profile
* `/api/users/me/` GET: Get logged in user’s profile (as well as private information like email, etc.)
* `/api/users/me/` PATCH: Update the logged in user’s profile public info 
* `/api/users/me/` DELETE: Delete logged in user
* `/api/social/followers/toggle-follow/<int:user_id>/` POST: Toggle follow/unfollow a user
* `/api/social/followers/following/` GET: List of all the users the user is following
* `/api/social/followers/followers/` GET: List of all the logged in user’s followers

#### Friend
* `/api/social/friends/` GET: List all accepted friends
* `/api/social/friends/request/<int:user_id>/` POST: Send friend request to another user
* `/api/social/friends/requests/<int:friend_request_id>/` GET: Get details of a friend request
* `/api/social/friends/requests/<int:friend_request_id>/` PATCH: Accept or Reject an open friend request
* `/api/social/friends/requests/<int:friend_request_id>/` DELETE: Delete a friend request
