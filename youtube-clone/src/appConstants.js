export const API_KEY = 'AIzaSyDDiZpwOGBRTYsQLqfVMNNiZVMhRj8pMDA';
export const API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=`+API_KEY
export const WATCH_VIDEO_INFO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=`+API_KEY

export const comments = [
    {
        author: 'Shivam',
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis`,
        replies: [
            {
                author: 'John',
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis`,
                replies: [
                    {
                        author: 'Doe',
                        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis`,
                        replies: [
                            
                        ]
                    }
                ]
            },
            {
                author: 'Derek',
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis`,
                replies: [
                    
                ]
            },
            {
                author: 'Johny',
                comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis`,
                replies: [
                    {
                        author: 'Elizsa',
                        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis`,
                        replies: [
                            
                        ]
                    },
                    {
                        author: 'Horein',
                        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis`,
                        replies: [
                            
                        ]
                    } 
                ]
            }
        ]
    },
    {
        author: 'Horein',
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis`,
        replies: [
            
        ]
    } 
]