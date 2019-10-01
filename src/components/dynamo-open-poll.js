// Refer here: https://docs.aws.amazon.com/code-samples/latest/catalog/code-catalog-javascript-example_code-dynamodb.html

const getAWS = () => {
  let AWS = require('aws-sdk');
  AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  return AWS;
}


export const getItem = (suggestionId) => {

  const AWS = getAWS()
  let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

  let params = {
    ExpressionAttributeValues: {
      ':id': { S: suggestionId },
    },
    KeyConditionExpression: 'suggestion = :id',
    TableName: 'suggestions',
  };

  ddb.query(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      data.Items.forEach(function (element, index, array) {
        console.log(element.SuggestionId.S + " (" + element.proposer.S + ")");
      });
    }
  });
}


export const putItem = (item) => {

  const AWS = getAWS()
  // Create DynamoDB document client
  let docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

  let params = {
    TableName: 'suggestions',
    Item: {
      'suggestion': item.suggestion,
      'proposer': item.proposer,
      'proposer_email': item.proposer_email,
      'num_votes': 1,
      'likers': [],
    }
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}



export const listTables = () => {

  const AWS = getAWS()
  let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

  ddb.listTables({ Limit: 10 }, function (err, data) {
    if (err) {
      console.log("Error", err.code);
    } else {
      console.log("Table names are ", data.TableNames);
    }
  });
}


export const listAllItems = () => {

  const AWS = getAWS()
  let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

  const params = {
    TableName: 'suggestions',
  };

  return new Promise((resolve, reject) => {
    ddb.scan(params, function (err, data) {
      !!err ? reject(err) : resolve(data)
    })
  })
}


export const updateLike = (item) => {
  const AWS = getAWS()
  // Create DynamoDB document client
  let docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
  // https://stackoverflow.com/a/34186828/683178 // an awesome answer

  const params = {
    TableName: 'suggestions',
    Key: { 'suggestion': item.suggestion },
    UpdateExpression: 'ADD #num_votes :one SET #likers = list_append(#likers, :liker)',
    ExpressionAttributeNames: {
      '#num_votes': 'num_votes',
      '#likers': 'likers',
    },
    ExpressionAttributeValues: {
      ':one': 1,
      ':liker': [item.liker],
    },
    ReturnValues: "UPDATED_NEW"
  };

  // Call DynamoDB to add the item to the table
  docClient.update(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      // console.log("These values were updated", data);
    }
  });
}
