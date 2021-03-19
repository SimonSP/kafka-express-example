const { kafka, registry } = require('./index')

const topic = 'users-info'
const version = 1
const subject = 'users-info-value'

const producer = kafka.producer()

const findSchemaBySubjectAndVersion = ({ version, subject }) =>
  registry.getRegistryId(subject, version)

const sendMessageToTopic = async ({ key, topic, encodePayloadId, message }) => {
  try {
    await producer.connect()
    const encodePayload = await registry.encode(encodePayloadId, message)

    const responses = await producer.send({
      topic,
      messages: [{ key, value: encodePayload }],
    })

    console.log(
      'Operacion exitosa al enviar un mensaje mediante Kafka. Response:',
      responses,
    )
  } catch (error) {
    console.log(error)
  }
}

const writeToKafka = async ({ topic, version, subject, message }) => {
  try {
    const encodePayloadId = await findSchemaBySubjectAndVersion({
      version,
      subject,
    })

    console.log(
      `Topic: ${topic} - Subject: ${subject} - ID: ${encodePayloadId}`,
    )
    await sendMessageToTopic({ message, topic, encodePayloadId })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { writeToKafka }
