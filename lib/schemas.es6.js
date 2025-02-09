Schemas = {};
Schemas.regex = {};

Schemas.regex.color = /^#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/;
Schemas.regex.phoneNumber = /^\+\d{11}$/;
Schemas.regex.username = Schemas.regex.room = /^[\w]+$/;

Schemas.userProfile = new SimpleSchema({
    color: {
        type: String,
        label: "User Color",
        regEx: Schemas.regex.color
    },
    avatar: {
        type: String,
        label: "Avatar URL",
        optional: true
    },
    number: {
        type: String,
        label: "Phone Number",
        regEx: Schemas.regex.phoneNumber,
        optional: true
    },
    use24HrTime: {
        type: Boolean,
        label: "Show 24 hr timestamps",
    }
});

Schemas.userProfile.messages({
    regEx: [
        {exp: Schemas.regex.color, msg: "[label] must be color string (e.g.) #FF0000 or #F00"},
        {exp: Schemas.regex.phoneNumber, msg: "[label] must be a phone number in this format +12223334444"}
    ]
});


Schemas.createRoom = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        regEx: Schemas.regex.room
    }
});


Schemas.userPreferences = new SimpleSchema({
    roomPreferences: {
        type: [Object],
        label: "User Color",
        regEx: Schemas.regex.color
    }
});
Schemas.roomPreference = new SimpleSchema({
    roomId: {
        type: String,
        label: "Room Identifier"
    },
    playMessageSound: {
        type: Boolean,
        label: "Play Message Sound"
    },
    desktopNotificationMention: {
        type: Boolean,
        label: "Desktop Notifications for @mentions"
    },
    desktopNotificationAllMessages: {
        type: Boolean,
        label: "Desktop Notifications for all messages"
    },
    smsAllMessages: {
        type: Boolean,
        label: "SMS Notifications for all messages"
    }
});
Schemas.roomPreferenceDefault = {
    playMessageSound: true,
    desktopNotificationMention: true,
    desktopNotificationAllMessages: false,
    smsAllMessages: false
};
Schemas.directRoomPreferenceDefault = {
    playMessageSound: true,
    desktopNotificationMention: true,
    desktopNotificationAllMessages: true,
    smsAllMessages: true
};
