class getBonds {

   getBondsData = async ({date, isins}) => {
        const cacheKey = JSON.stringify({date, ...isins.sort()});
  
        const cache = JSON.parse(localStorage.getItem(cacheKey));

        if (cache && this.checkCasheTime(cache)) {
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

    checkCasheTime(cache) {
        const timestamp = cache[cache.length - 1];

        if (typeof timestamp !== 'number') {
            return false;
        }
   
        return (new Date() - timestamp) < 5*60*1000;
    }

    convertArrayToObject = (array, inital) => {
        return array.reduce((obj, item) => {
            return {
                ...obj,
                [item['isin']]: item,
            };
        }, inital);
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

const bonds = new getBonds();

bonds.getBondsData({
    date: '20180121',
    isins: ['MU000A0JU4L3', 'RU000A0JU4L3', 'XS0971721963']
});
