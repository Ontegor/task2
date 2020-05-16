class getBonds {

   getBondsData = async ({date, isins}) => {
        const cacheKey = JSON.stringify({date, ...isins.sort()});
  
        const cache = JSON.parse(localStorage.getItem(cacheKey));

        if (cache && this.checkCacheTime(cache)) {
            return this.getOriginalBonds(cache);
        }
        
        // Здесь должен быть запрос к api
        const result = this.responseData();

        const responseJson = JSON.stringify([...result, Date.now()]);
        localStorage.setItem(cacheKey, responseJson);

        return result;
    }

    getOriginalBonds(cache) {
        delete cache[cache.length - 1];

        return cache;
    }

    checkCacheTime(cache) {
        const timestamp = cache[cache.length - 1];

        if (typeof timestamp !== 'number') {
            return false;
        }
   
        return (new Date() - timestamp) < 5*60*1000;
    }

    responseData = () => [{
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
