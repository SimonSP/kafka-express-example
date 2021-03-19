const { kafka, registry } = require('./index')

const groupId = process.env.KAFKA_GROUPID

const consumer = kafka.consumer({ groupId })

const readMessageFromTopic = async (topic, func) => {
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ message }) => {
      try {
        const decodedMessage = {
          ...message,
          //key: await registry.decode(message.key)
          value: await registry.decode(message.value),
        }

        func(decodedMessage)
      } catch (error) {
        console.log(error)
      }
    },
  })
}

module.exports = { readMessageFromTopic }
