class Bonds {
   constructor() {
       this.cache = new Map();
   }

   setCache(key, data) {
       this.cache.set(key, data);
   }
   
   getCache(key) {
       if (this.cache.has(key)) {
           return this.cache.get(key);
       }
       
       return null;
   }

   getChacheKey(args) {
       return JSON.stringify(args);
   }

   getBondsData = (...args) => {
       const cacheKey = this.getChacheKey(args);
       const cache = this.getCache(cacheKey);

        if (cache) {
            return cashe;
        }
        
        // Здесь должен быть запрос к api
        const result = this.apiResponseData();

        this.setCache(cacheKey, result);
        
        return result;
    }

    apiResponseData = () => [{
        isin: 'RU000A0JU4L3',
        data: {}
    },
    {
        isin: 'XS0971721963',
        data: {}
    },
    {
        isin: 'EU000A0JU4L3',
        data: {}
    }];
}

module.exports = {Bonds}
