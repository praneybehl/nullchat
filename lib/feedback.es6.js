Feedback = {
    // Command Feedback
    "moderator-not-owner": {type: "error", message: "You must be the owner to change moderators."},
    "moderator-already-moderator": {type: "error", message: "User is already a moderator"},
    "topic-no-topic": {type: "error", message: "You must specify a topic."},
    "topic-not-owner": {type: "error", message: "You must be the owner to change topics."},
    "number-no-number": {type: "error", message: "Specify phone number in this format: +12223334444"},
    "gravatar-no-email": {type: "error", message: "You must specify a valid gravatar email address."},
    "color-no-color": {type: "error", message: "You must specify a color string (e.g.) #FF000 or #F00"},
    "avatar-no-url": {type: "error", message: "You must specifythe URL of an image to set your avatar to."},
    "meme-error-creating": {type: "error", message: "Error creating meme."},
    "meme-bad-usage": {type: "error", message: "Usage: /meme name [top line text] [bottom line text"},

    // Generic Feedback
    "room-not-found": {type: "error", message: "Room could not be found."},
    "user-not-found": {type: "error", message: "User could not be found."},

    // Method Feedback
    "room-privacy-not-owner": {type: "error", message: "You must be the room owner to set the room's privacy."},
    "kick-no-permission": {type: "error", message: "You do not have permission to kick in this room."},
    "message-not-invited": {type: "error", message: "You must be invited to send a message to this room."},
    "room-create-alphanumeric": {type: "error", message: "You must be invited to send a message to this room."},
    "room-create-exists": {type: "error", message: "A room with that name already exists."},
    "room-join-no-permission": {type: "error", message: "You don't have permission to join that room."},
    "room-leave-owner": {type: "error", message: "You can't leave a room you own. Sorry bub."},
    "message-blank": {type: "error", message: "Message not sent because it was blank."},
    "invite-no-permission": {type: "error", message: "You don't have permission to invite to that room."},
    "invite-already": {type: "error", message: "The user is already invited to the room."},
    "invite-to-direct": {type: "error", message: "You can not invite a user to a direct message room."},
    "username-taken": {type: "error", message: "That username is already taken."},
    "username-alphanumeric": {type: "error", message: "Username must be alphanumeric."},
};

AlertFeedback = (err, data) => {
    if (err && err.error) {
        const feedback = Feedback[err.error];
        if (feedback && feedback.message) {
            sAlert.error(feedback.message);
        }
    }
};
