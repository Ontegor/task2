class Bonds {
   constructor() {
       this.cache = [];
   }

   setCache(key, data) {
       this.cache[key] = data;
   }
   
   getCache(key) {
       if (this.cache[key] !== undefined) {
           return this.cache[key];
       }
       
       return null;
   }

   getCacheKey(args) {
       return JSON.stringify(args);
   }

   getBondsData = (...args) => {
       const cacheKey = this.getCacheKey(...args);
       const cache = this.getCache(cacheKey);

        if (cache) {
            return cache;
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
