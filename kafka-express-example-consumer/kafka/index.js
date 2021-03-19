const { Kafka } = require('kafkajs')
const { SchemaRegistry } = require('@kafkajs/confluent-schema-registry')

const kafkaUser = process.env.KAFKA_USER
const password = process.env.KAFKA_PASSWORD
const brokers = [process.env.KAFKA_BROKERS]
const host = process.env.KAFKA_HOST
const clientId = process.env.KAFKA_CLIENTID

const sasl =
  kafkaUser && password ? { kafkaUser, password, mechanism: 'plain' } : null
const ssl = !!sasl

const registry = new SchemaRegistry({ host })

const kafka = new Kafka({ clientId, brokers /*ssl, sasl */ })

module.exports = {
  kafka,
  registry,
}
