##################
invitation flow for adding occupants to a home
##################

*********
Logic
*********

invitation object
========

Mongo Collection
invitation {
    _id:  builtin,
    email: _,
    isUsed: Boolean,
    expires: new Date (now + 1m),
    homeId,
}


url
========
/invite/:id

method
========

requires logged in

if (invite.email === user.email)
attachToHome(userId , homeId)


session
========

To be verified on how router handles
set session variable(s)
invite_id = :id
user (?)

*********
Sources
*********

http://stackoverflow.com/questions/20990550/how-to-make-sign-up-invitation-only
http://themeteorchef.com/recipes/adding-a-beta-invitation-system-to-your-meteor-application/
http://www.manuel-schoebel.com/blog/login-required-for-an-url-done-right

