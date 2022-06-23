* Benefits of serverless computing for a startup:
The benefits of serverless computing for a start up include:

1. Serverless computing allows business owners to pay for servers only when a user request or an event is triggered. As such, tech teams eliminate idle time, making sure they don’t pay extra for server power.
2.  Simple deployment and continuous delivery
Unlike a server-based architecture, the backend for distributed systems is easier to set up and deploy. Connecting the source code to whichever serverless security for startup vendor platform you chose (AWS, Google, Azure, etc) is all it takes to deploy the project.
3. Infrastructure cost savings: serverless architecture is a powerful way for business owners to control infrastructure expenses. If a startup website has fewer than 1,000 visitors, switching to a pay-as-you-go model can cut up to 90% of backend maintenance and resource costs.



if method == 'GET':
    return{
        'statusCode':200,
        'headers':{
            'Content-Type': 'text/hmtl'
        },
        'body': theMessage1
    }

if method == "POST":
    bodyContent = event.get('body', {})
    return{
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
        },
        "body": bodyContent
    }    
    