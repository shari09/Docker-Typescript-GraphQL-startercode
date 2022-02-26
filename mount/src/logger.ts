const info = (...args: any[]) => {
  console.log('\x1b[33m[INFO]', ...args) // yellow
  process.stdout.write('\x1b[0m')
}

const error = (...args: any[]) => {
  process.stdout.write('\x1b[31m[ERROR] ') // red
  console.log(...args)
  process.stdout.write('\x1b[0m')
}

const logger = {
  info,
  error,
}

export default logger
