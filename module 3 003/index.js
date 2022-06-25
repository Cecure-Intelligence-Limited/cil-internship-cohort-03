string ='My Website Home Page'
  
# lambda returns a function object
(lambda string : print(string))(string)

## From the console
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
