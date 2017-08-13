import {Dictionary } from './common/interfaces';

interface ENV_CONFIG {
    baseApiUrl: string
}


const config: Dictionary<ENV_CONFIG> = {
    dev:{
        baseApiUrl: 'http://localhost:1337/api/v1'
    },
    test:{
        baseApiUrl: 'http://localhost:1337/api/v1'
    },
    prod:{
        baseApiUrl: 'http://localhost:1337/api/v1'
    },
    common: {
        baseApiUrl: 'http://localhost:1337/api/v1'
    }
}

export class AppConfig {
    
    static ENV: string = 'dev';

    static route(route){
        let url = AppConfig.getAppConfig().baseApiUrl;
        return `${url}/${route}` ;
    }

    static getAppConfig():ENV_CONFIG{
        switch(AppConfig.ENV.toLowerCase()){
            case 'dev':
            case 'development':
                return config.dev;
            case 'test':
                return config.test;
            case 'prod':
            case 'production':
                return config.prod;
            default:
                return config.dev;
        } 
    }
}



