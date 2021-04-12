const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-northeast-2' });

const dbclient = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
});

exports.handler = async (event) => {
  let response;

  const {
    requestContext: { time, requestId },
    body,
  } = event;

  const { theater, phone, name, gender, movie } = JSON.parse(body);

  const params = {
    Item: {
      id: requestId,
      time,
      theater,
      phone,
      name,
      gender,
      movie,
    },
    TableName: 'CinepassAdmin',
  };

  try {
    await dbclient.put(params).promise();

    // 오늘 같은 전화번호를 가진 이용자가 이미 이용하지 않았는지 체크할 것
    // 일주일에 3번 이상 이용하지 않았는지 체크할 것

    response = {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.log(error);
    response = {
      statusCode: 500,
      body: JSON.stringify({ success: false, error }),
    };
  }

  return response;
};
