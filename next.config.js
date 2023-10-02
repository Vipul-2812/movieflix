/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
        domains:['occ-0-3933-116.1.nflxso.net'],

    },
    env:{
        customKey:'my-value',
        NEXT_APP_RAPIDURL:'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en',
        NEXT_APP_MONGO : 'mongodb+srv://vipul:vipul2001@cluster0.gwwjccc.mongodb.net/?retryWrites=true&w=majority' ,
    },
}

module.exports = nextConfig
