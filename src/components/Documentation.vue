<template>
    <section :id="sectionId" class="section is-dark">
        <div class="container">
            <h1 class="title">Commands reference</h1>
            <p>
                List of all available commands, along with their arguments and explanations. Many of
                the commands have subcommands, which are shown indented under them.<br />Syntax for
                arguments is as follows:
            </p>
            <ul>
                <li>
                    > Required arguments are in <code>[brackets]</code>, optional arguments are in
                    <code>(parentheses)</code>. Insert your own values for these.
                </li>
                <li>
                    > By default arguments are split on whitespace, unless
                    <code>"surrouded by quotes"</code> or end with <code>...</code> in this
                    documentation.
                </li>
                <li>
                    > String literal options are presented without brackets or parentheses. These
                    are optional but write them as they are shown.
                </li>
            </ul>

            <CommandCategory
                v-for="item in commandCategories"
                v-bind:group="item"
                v-bind:key="item.id"
                :prefix="prefix"
            >
            </CommandCategory>
        </div>
    </section>
    <div>
        <a href="#section-donate" id="downArrow" class="has-text-centered" v-smooth-scroll>
            <div>
                <font-awesome-icon :icon="['fas', 'angle-down']" />
            </div>
        </a>
    </div>
</template>

<style scoped>
#downArrow {
    font-size: 2rem;
}
.container {
    text-align: left;
}
.title {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
}
code {
    color: lightblue;
}
ul {
    padding: 0.5em;
}
</style>

<script>
import CommandCategory from './CommandCategory.vue';
import Command from './Command.vue';
export default {
    name: 'Documentation',
    components: {
        CommandCategory,
        Command,
    },
    data() {
        return {
            prefix: '>',
            commandCategories: [
                {
                    name: 'Configuration',
                    description: 'Configure how the bot behaves on your server',
                    commandList: [
                        {
                            name: 'prefix',
                            usage: '[prefix]',
                            description: 'Change the bot prefix to whatever you want',
                        },
                        {
                            name: 'autoresponses',
                            usage: '[boolean]',
                            description:
                                'Toggle automatic responses to certain message content (easter eggs)',
                        },
                        {
                            name: 'levelup',
                            usage: '[boolean]',
                            description: 'Toggle levelup messages on or off',
                        },
                        {
                            name: 'muterole',
                            usage: '[role]',
                            description:
                                'Set the role to be added to users when muted using the mute command',
                        },
                        {
                            name: 'autorole',
                            description:
                                'Configure roles to be given automatically to any new members',
                            subcommands: [
                                {
                                    name: 'add',
                                    usage: '[role]',
                                    description: 'Add an autorole',
                                },
                                {
                                    name: 'remove',
                                    usage: '[role]',
                                    description: 'Remove an autorole',
                                },
                                {
                                    name: 'list',
                                    description: 'List current autoroles on this server',
                                },
                            ],
                        },
                        {
                            name: 'starboard',
                            subcommands: [
                                {
                                    name: 'channel',
                                    usage: '[channel]',
                                    description: 'Set the starboard channel',
                                },
                                {
                                    name: 'toggle',
                                    usage: '[boolean]',
                                    description: 'Toggle the starboard on or off',
                                },
                                {
                                    name: 'emoji',
                                    usage: '[emoji]',
                                    description:
                                        'Change the starboard emoji to be something other than :star:',
                                },
                                {
                                    name: 'amount',
                                    usage: '[amount]',
                                    description:
                                        'Change the amount of reactions needed for message to be starboarded',
                                },
                            ],
                        },
                        {
                            name: 'votechannel',
                            description:
                                'Set channels where automatic voting reactions are added to messages',
                            subcommands: [
                                {
                                    name: 'add',
                                    usage: '[channel] (type)',
                                    description: 'Add a voting channel',
                                },
                                {
                                    name: 'remove',
                                    usage: '[channel]',
                                    description: 'Remove a voting channel',
                                },
                                { name: 'list', description: 'List current voting channels' },
                            ],
                        },
                        {
                            name: 'greeter',
                            description: 'Set up welcome messages for new members',
                            subcommands: [
                                {
                                    name: 'channel',
                                    usage: '[channel]',
                                    description: 'Set the welcome channel',
                                },
                                {
                                    name: 'toggle',
                                    usage: '[boolean]',
                                    description: 'Toggle the greeter on or off',
                                },
                                {
                                    name: 'message',
                                    usage: '[message...] default',
                                    description:
                                        'Change the formatting of the welcome message. Available formatting tokens are: <code>{user}, {username}, {mention}, {guild}, {id}</code>',
                                },
                            ],
                        },
                        {
                            name: 'goodbyemessage',
                            description: 'Set up goodbye messages when members leave',
                            subcommands: [
                                {
                                    name: 'channel',
                                    usage: '[channel]',
                                    description: 'Set the goodbye channel',
                                },
                                {
                                    name: 'toggle',
                                    usage: '[boolean]',
                                    description: 'Toggle the goodbye messages on or off',
                                },
                                {
                                    name: 'message',
                                    usage: '[message...] default',
                                    description:
                                        'Change the formatting of the goodbye message. Available formatting tokens are: <code>{user}, {username}, {mention}, {guild}, {id}</code>',
                                },
                            ],
                        },
                        {
                            name: 'logger',
                            description: 'Log various guild events',
                            subcommands: [
                                {
                                    name: 'members',
                                    usage: '[channel]',
                                    description: 'Set channel for logging member changes',
                                },
                                {
                                    name: 'bans',
                                    usage: '[channel]',
                                    description: 'Set channel where bans are logged',
                                },
                                {
                                    name: 'deleted',
                                    subcommands: [
                                        {
                                            name: 'channel',
                                            usage: '[channel]',
                                            description:
                                                'Set channel where deleted messages are logged',
                                        },
                                        {
                                            name: 'ignore',
                                            usage: '[channel]',
                                            description:
                                                'Ignore some channel from deleted messages logging',
                                        },
                                        {
                                            name: 'unignore',
                                            usage: '[channel]',
                                            description: 'Reverse the ignoring you did',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'LastFm',
                    description:
                        'Commands interacting with the Last.fm API.<br> For timeframe parameter you can use <code>day, week, month, year</code> or <code>alltime</code>.<br>For anything requiring track, album or artist name you can use <code>np</code> to query your currently playing song.',
                    commandList: [
                        {
                            name: 'fm',
                            description:
                                "These use your linked Last.fm account, or @mentioned user's",
                            subcommands: [
                                {
                                    name: 'set',
                                    usage: '[lastfm username]',
                                    description: 'Save your Last.fm username',
                                },
                                {
                                    name: 'unset',
                                    description: 'Unlink your Last.fm account',
                                },
                                {
                                    name: 'youtube',
                                    description: 'Get youtube link for your currently playing song',
                                },
                                {
                                    name: 'album',
                                    usage: '[album] | [artist]',
                                    description: 'Your top tracks from a given album',
                                },
                                {
                                    name: 'chart',
                                    usage: '(timeframe) (width)x(height) artist notitle',
                                    description: 'Collage of your top albums or artists',
                                },
                                {
                                    name: 'colorchart',
                                    usage: '[#hex] (width)x(height) rainbow rainbowdiagonal',
                                    description:
                                        'Collage based on album color, use with hex color or rainbow options',
                                },
                                {
                                    name: 'artist',
                                    usage: '(timeframe)',
                                    description: '',
                                    subcommands: [
                                        {
                                            name: 'toptracks',
                                            usage: '[artist]',
                                            description: 'Your top tracks for the specified artist',
                                        },
                                        {
                                            name: 'topalbums',
                                            usage: '[artist]',
                                            description: 'Your top albums for the specified artist',
                                        },
                                        {
                                            name: 'overview',
                                            usage: '[artist]',
                                            description: 'Your overview for the specified artist',
                                        },
                                    ],
                                },
                                {
                                    name: 'nowplaying',
                                    description: 'Your currently playing song',
                                },
                                {
                                    name: 'toptracks',
                                    usage: '(timeframe) (amount)',
                                    description: 'Your most listened to tracks',
                                },
                                {
                                    name: 'topartists',
                                    usage: '(timeframe) (amount)',
                                    description: 'Your most listened to artists',
                                },
                                {
                                    name: 'topalbums',
                                    usage: '(timeframe) (amount)',
                                    description: 'Your most listened to albums',
                                },
                                {
                                    name: 'recent',
                                    usage: '(amount)',
                                    description: 'Your most recent tracks',
                                },
                                {
                                    name: 'last',
                                    usage: '[ week | month | year ]',
                                    description: 'Your Last.fm listening overview',
                                },
                                {
                                    name: 'profile',
                                    description: 'Your Last.fm profile',
                                },
                                {
                                    name: 'server',
                                    description: '',
                                    subcommands: [
                                        {
                                            name: 'topartists',
                                            description:
                                                "Combined top artists of the server's members",
                                        },
                                        {
                                            name: 'topalbums',
                                            description:
                                                "Combined top albums of the server's members",
                                        },
                                        {
                                            name: 'toptracks',
                                            description:
                                                "Combined top tracks of the server's members",
                                        },
                                        {
                                            name: 'nowplaying',
                                            description:
                                                'What people on the server are listening to at the moment',
                                        },
                                        {
                                            name: 'recent',
                                            description:
                                                'What people on the server were recently listening to',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'whoknows',
                            usage: '[artist]',
                            description: 'Who has listened to given artist most on the server',
                        },
                        {
                            name: 'whoknowstrack',
                            usage: '[track] | [artist]',
                            description: 'Who has listened to given track most on the server',
                        },
                        {
                            name: 'whoknowsalbum',
                            usage: '[album] | [artist]',
                            description: 'Who has listened to given album most on the server',
                        },
                        { name: 'crowns', description: 'Check your artist crowns' },
                        {
                            name: 'lyrics',
                            usage: '[song]',
                            description: 'Search for song lyrics',
                        },
                        {
                            name: 'report',
                            usage: '[lastfm username] [reason...]',
                            description:
                                'Report a lastfm account that is botting plays to gain crowns',
                        },
                    ],
                },
                {
                    name: 'Fishy',
                    description: 'Fishing minigame',
                    commandList: [
                        {
                            name: 'fishy',
                            usage: '(@user)',
                            description: 'Go fishing',
                        },
                        { name: 'fishytimer', description: 'Check your fishy timer' },
                        {
                            name: 'fishystats',
                            usage: '(@user) global',
                            description: 'See fishing statistics',
                        },
                    ],
                },
                {
                    name: 'Rolepicker',
                    description:
                        'Set up a channel where users can add and delete roles using <code>+name</code> and <code>-name</code>',
                    commandList: [
                        {
                            name: 'add',
                            usage: '[role] [name]',
                            description: 'Add a role',
                        },
                        { name: 'remove', usage: '[name]', description: 'Remove a role' },
                        {
                            name: 'list',
                            description: 'List all the roles currently available for picking',
                        },
                        {
                            name: 'channel',
                            usage: '[channel]',
                            description: 'Set the channel where rolepicker will function',
                        },
                        {
                            name: 'enabled',
                            usage: '[boolean]',
                            description: 'Toggle whether the role picker is enabled',
                        },
                    ],
                },
                {
                    name: 'Notifications',
                    description: 'Set up keyword notifications',
                    commandList: [
                        {
                            name: 'add',
                            usage: '[keyword]',
                            description: 'Add a notification',
                        },
                        {
                            name: 'remove',
                            usage: '[keyword]',
                            description: 'Remove a notification',
                        },
                        { name: 'list', description: 'List all your notifications' },
                    ],
                },
                {
                    name: 'Typings',
                    description: 'Typing speed tests',
                    commandList: [
                        {
                            name: 'typing',
                            subcommands: [
                                {
                                    name: 'test',
                                    usage: '(language) (wordcount)',
                                    description: 'Take a typing test',
                                },
                                {
                                    name: 'race',
                                    usage: '(language) (wordcount)',
                                    description: 'Race against other members of the server',
                                },
                                {
                                    name: 'history',
                                    usage: '(@user)',
                                    description: 'See your typing test history',
                                },
                                {
                                    name: 'stats',
                                    usage: '(@user)',
                                    description: 'See statistics about your typing',
                                },
                                {
                                    name: 'cleardata',
                                    description: 'Delete all your saved typing data',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Reddit',
                    description: 'Get reddit content',
                    commandList: [
                        {
                            name: 'reddit',
                            subcommands: [
                                {
                                    name: 'hot',
                                    usage: '[subreddit] (number)',
                                    description: 'Get hot post from given subreddit',
                                },
                                {
                                    name: 'new',
                                    usage: '[subreddit] (number)',
                                    description: 'Get new post from given subreddit',
                                },
                                {
                                    name: 'controversial',
                                    usage: '[subreddit] (number)',
                                    description: 'Get controversial post from given subreddit',
                                },
                                {
                                    name: 'top',
                                    usage: '[subreddit] (number)',
                                    description: 'Get top post from given subreddit',
                                },
                                {
                                    name: 'random',
                                    usage: '[subreddit] -i',
                                    description:
                                        'Get random post from given subreddit, only images with the <code>-i</code> flag',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Cryptocurrency',
                    description:
                        'Cryptocurrency commands. <code>pair</code> defaults to USDT if not specified',
                    commandList: [
                        {
                            name: 'crypto',
                            subcommands: [
                                {
                                    name: 'price',
                                    usage: '[coin] (pair)',
                                    description:
                                        'See the current price and 24h statistics of given crypto pair',
                                },
                                {
                                    name: 'chart',
                                    usage: '[coin] (pair) (interval) (limit)',
                                    description:
                                        'Generates candlestick chart for a given crypto pair',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Media',
                    description: 'Various internet media',
                    commandList: [
                        {
                            name: 'gfycat',
                            usage: '[query...]',
                            description: 'Search for random gifs from Gfycat',
                        },
                        {
                            name: 'google',
                            usage: '[query]',
                            description: 'Search from Google',
                        },
                        {
                            name: 'googleimages',
                            usage: '[query]',
                            description: 'Search from Google Images',
                        },
                        {
                            name: 'youtube',
                            usage: '[query...]',
                            description: 'Search for videos from youtube',
                        },
                        {
                            name: 'instagram',
                            usage: '[ url | id ] ... -d',
                            description: 'Extract all the images from one or more instagram posts',
                        },
                        {
                            name: 'twitter',
                            usage: '[ url | id ] ... -d',
                            description: 'Extract all the images from one or more tweets',
                        },
                        {
                            name: 'melon',
                            usage: 'day | month | realtime | rising',
                            description: 'Melon music charts',
                        },
                        {
                            name: 'xkcd',
                            usage: '(id)',
                            description: 'Get a random xkcd, or one with given ID',
                        },
                        {
                            name: 'opgg',
                            description: 'Leageue of Legends summoner information',
                            subcommands: [
                                {
                                    name: 'profile',
                                    usage: '[region] [summoner name...]',
                                    description: 'See op.gg profile of given summoner',
                                },
                                {
                                    name: 'nowplaying',
                                    usage: '[region] [summoner name...]',
                                    description: 'See current game of given summoner',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Mod',
                    description: 'Commands for server moderators',
                    commandList: [
                        {
                            name: 'ban',
                            usage: '[users...]',
                            description:
                                'Ban discord users, get a confirmation dialog for guild members',
                        },
                        {
                            name: 'fastban',
                            usage: '[users...]',
                            description: 'Ban users without confirmation',
                        },
                        {
                            name: 'mute',
                            usage: '[member] for (duration)',
                            description: 'Mute a member using your configured mute role',
                        },
                        {
                            name: 'unmute',
                            usage: '[member]',
                            description: 'Umute a member',
                        },
                        {
                            name: 'purge',
                            usage: '[amount] (@users...)',
                            description:
                                'Delete amount of messages from this channel, optionally filtered by users',
                        },
                        {
                            name: 'blacklist',
                            subcommands: [
                                {
                                    name: 'show',
                                    description: 'Show everything that is currently blacklisted',
                                },
                                {
                                    name: 'member',
                                    usage: '[member]',
                                    description: 'Blacklist a member from using commands',
                                },
                                {
                                    name: 'channel',
                                    usage: '[channel]',
                                    description:
                                        'Blacklist a channel so that no commands can be used there',
                                },
                                {
                                    name: 'command',
                                    usage: '[command]',
                                    description:
                                        'Blacklist a command from being used on this server',
                                },
                                {
                                    name: 'delete',
                                    usage: '[boolean]',
                                    description:
                                        'Toggle whether to delete messages on blacklist trigger',
                                },
                            ],
                        },
                        {
                            name: 'whitelist',
                            description: 'Reverse blacklisting',
                            subcommands: [
                                {
                                    name: 'member',
                                    usage: '[member]',
                                    description: 'Whitelist a member',
                                },
                                {
                                    name: 'channel',
                                    usage: '[channel]',
                                    description: 'Whitelist a channel',
                                },
                                {
                                    name: 'command',
                                    usage: '[command]',
                                    description: 'Whitelist a command',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Custom commands',
                    description: 'Set up custom server specific commands',
                    commandList: [
                        {
                            name: 'add',
                            usage: '[keyword] [response...]',
                            description: 'Add a new custom command',
                        },
                        {
                            name: 'remove',
                            usage: '[keyword]',
                            description: 'remove a custom command',
                        },
                        {
                            name: 'search',
                            usage: '[keyword]',
                            description: 'Search for commands',
                        },
                        {
                            name: 'list',
                            description: 'List all custom commands on this server',
                        },
                        {
                            name: 'restrict',
                            usage: '[boolean]',
                            description:
                                'Restrict adding commands to people with <code>manage_server</code> permission',
                        },
                    ],
                },
                {
                    name: 'Kpop',
                    description: 'Kpop related commands',
                    commandList: [
                        { name: 'stan', description: 'Get a random kpop artist to stan' },
                        {
                            name: 'idol',
                            description: 'Kpop idols database',
                            subcommands: [
                                {
                                    name: 'random',
                                    usage: '(gender)',
                                    description: 'Get profile of a random kpop idol',
                                },
                                {
                                    name: 'birthdays',
                                    usage: '[month] [day]',
                                    description:
                                        'See which kpop idols have birthdays on a given date',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Miscellaneous',
                    description: 'Miscellaneous commands',
                    commandList: [
                        {
                            name: 'ascii',
                            usage: '[text...]',
                            description: 'Turn text into fancy ascii art',
                        },
                        {
                            name: 'choose',
                            usage: '[choice1] or [choice2] or ... or [choiceN]',
                            description: 'Choose from any number of options',
                        },
                        {
                            name: 'eightball',
                            usage: '[question]',
                            description: 'Ask a yes/no question from the all knowing Eight-ball',
                        },
                        {
                            name: 'rng',
                            usage: '(start)-[end]',
                            description: 'Get a random number inside the given range',
                        },
                        {
                            name: 'clap',
                            usage: '[sentence]',
                            description: 'Add claps between words',
                        },
                        {
                            name: 'color',
                            usage: '[ #hex | @member | @role | url | random (amount) ] ...',
                            description:
                                'Get color from given source, give multiple sources to create a pattern',
                        },
                        {
                            name: 'emoji',
                            usage: '[emoji]',
                            description: 'See emoji source image and data',
                        },
                        {
                            name: 'ship',
                            usage: '[name] and [name]',
                            description: 'Ship two people',
                        },
                        {
                            name: 'horoscope',
                            description: 'Check your daily horoscope',
                            subcommands: [
                                {
                                    name: 'set',
                                    usage: '[zodiac]',
                                    description: 'Save your zodiac sign',
                                },
                                {
                                    name: 'list',
                                    description:
                                        'List all zodiac signs along with their date ranges',
                                },
                                {
                                    name: 'tomorrow',
                                    description: 'See your horoscope for tomorrow',
                                },
                                {
                                    name: 'yesterday',
                                    description: 'See your horoscope from yesterday',
                                },
                            ],
                        },
                        {
                            name: 'minecraft',
                            description: 'See the status of saved minecraft server',
                            subcommands: [
                                {
                                    name: 'save',
                                    usage: '[address] [port]',
                                    description:
                                        'Save the minecraft server to be used for this guild',
                                },
                                {
                                    usage: '[address] [port]',
                                    description: 'See the status of any given minecraft server',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Information',
                    description: 'See bot related information',
                    commandList: [
                        {
                            name: 'info',
                            description: 'Get some basic information about the bot',
                        },
                        { name: 'ping', description: 'See the current bot response time' },
                        { name: 'invite', description: 'Invite Miso Bot to your server' },
                        {
                            name: 'donate',
                            description:
                                'See options for donating, Miso cannot stay online without your support!',
                        },
                        {
                            name: 'donators',
                            description: 'List of all the amazing people who have donated',
                        },
                        {
                            name: 'commandstats',
                            subcommands: [
                                {
                                    name: 'server',
                                    usage: '(@user)',
                                    description: 'Most used commands on this server',
                                },
                                {
                                    name: 'global',
                                    usage: '(@user)',
                                    description: 'Most used commands globally',
                                },
                                {
                                    usage: '[command]',
                                    description: 'Stats for a specific command',
                                },
                            ],
                        },
                        {
                            name: 'emojistats',
                            usage: '(@user)',
                            description:
                                'See most used emojis on the server, optionally filtered by user',
                        },
                        {
                            name: 'github',
                            description: 'Get a link to the Miso Bot source code',
                        },
                        {
                            name: 'changelog',
                            usage: '(author) (repo)',
                            description:
                                'See the Miso Bot repository commits by default, or any other github repo',
                        },
                        {
                            name: 'servericon',
                            usage: '(guild_id)',
                            description: 'See the server icon',
                        },
                        {
                            name: 'shardinfo',
                            description: 'Get information about current sharding status',
                        },
                        {
                            name: 'system',
                            description: 'Get information about current system resource usage',
                        },
                    ],
                },
                {
                    name: 'Utility',
                    description: 'Very useful commands',
                    commandList: [
                        {
                            name: '!',
                            usage: '[query...]',
                            description:
                                '<a href="https://duckduckgo.com/bang">duckduckgo.com/bang</a>',
                        },
                        {
                            name: 'creategif',
                            usage: '[url]',
                            description: 'Attempt to create a Gfycat GIF from given media',
                        },
                        {
                            name: 'streamable',
                            usage: '[url]',
                            description: 'Attempt to create a streamable from given media',
                        },
                        {
                            name: 'define',
                            usage: '[word...]',
                            description: 'Get definition for a word from Oxford Dictionary',
                        },
                        {
                            name: 'thesaurus',
                            usage: '[word...]',
                            description: 'Get synonyms for a word',
                        },
                        {
                            name: 'urban',
                            usage: '[word...]',
                            description: 'Get definition for a word from Urban Dictionary',
                        },
                        {
                            name: 'translate',
                            description: 'Translate text using Naver Papago and Google translate',
                            subcommands: [
                                {
                                    usage: '[text...]',
                                    description:
                                        'Automatically detect language and translate to english',
                                },
                                {
                                    usage: '/xx [text..]',
                                    description: 'Specify target language',
                                },
                                {
                                    usage: 'xx/yy [text...]',
                                    description: 'Specify both source and target language',
                                },
                            ],
                        },
                        {
                            name: 'wolfram',
                            usage: '[query...]',
                            description: 'Ask anything from Wolfram|Alpha',
                        },
                        {
                            name: 'weather',
                            description: 'Check the weather of your saved location',
                            subcommands: [
                                {
                                    name: 'save',
                                    usage: '[location...]',
                                    description: 'Save your location for future weather requests',
                                },
                                {
                                    usage: '[location]',
                                    description: 'See the weather of given location',
                                },
                            ],
                        },
                        {
                            name: 'stock',
                            usage: '[ticker]',
                            description: 'See price data for any stock in the NASDAQ',
                        },
                        {
                            name: 'remindme',
                            subcommands: [
                                {
                                    name: 'in',
                                    usage: '[some time] to [something...]',
                                    description: 'Get reminded after given duration of time',
                                },
                                {
                                    name: 'on',
                                    usage: '[YYYY/MM/DD] (HH:mm:ss) to [something...]',
                                    description:
                                        'Get reminded on specified datetime (timezone UTC)',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'User',
                    description: 'User and guild related commands',
                    commandList: [
                        {
                            name: 'avatar',
                            usage: '(@user)',
                            description: "Get user's profile picture",
                        },
                        {
                            name: 'activity',
                            usage: '(@user) global',
                            description: 'Your hourly activity chart (GMT)',
                        },
                        {
                            name: 'rank',
                            usage: '(@user)',
                            description: 'See your XP ranking',
                        },
                        {
                            name: 'profile',
                            usage: '(@user)',
                            description: 'Your personal customizable user profile',
                        },
                        {
                            name: 'editprofile',
                            description: 'Edit your profile',
                            subcommands: [
                                {
                                    name: 'description',
                                    usage: '[text...]',
                                    description: 'Change the description on your profile',
                                },
                                {
                                    name: 'color',
                                    usage: '[#hex]',
                                    description:
                                        'Set a background color to be used instead of your role color',
                                },
                                {
                                    name: 'background',
                                    usage: '[url]',
                                    description:
                                        'Set a custom background image, must be a direct link',
                                },
                                {
                                    name: 'graph',
                                    usage: '[boolean]',
                                    description:
                                        'Toggle whether to show activity graph on your profile or not',
                                },
                            ],
                        },
                        {
                            name: 'hug',
                            usage: '(huggable)',
                            description: 'Hug someone or something',
                        },
                        {
                            name: 'members',
                            description: 'Show the most recently joined members',
                        },
                        { name: 'roleslist', description: 'List all roles on this server' },
                        {
                            name: 'serverinfo',
                            description: 'Show information about this server',
                        },
                        {
                            name: 'userinfo',
                            usage: '(@user)',
                            description: 'Show information about a user',
                        },
                        {
                            name: 'topservers',
                            description: 'List your most active servers with Miso Bot',
                        },
                        {
                            name: 'leaderboard',
                            description: 'Various leaderboards',
                            subcommands: [
                                {
                                    name: 'fishy',
                                    usage: 'global',
                                    description: 'Fishy leaderboard',
                                },
                                {
                                    name: 'levels',
                                    usage: 'global',
                                    description: 'XP leaderboard',
                                },
                                {
                                    name: 'wpm',
                                    usage: 'global',
                                    description: 'Typing test high scores leaderboard',
                                },
                                {
                                    name: 'crowns',
                                    description: 'Last.fm artist crowns leaderboard',
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    },
    props: {
        sectionId: String,
    },
};
</script>
