import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import 'jest-canvas-mock'

// Set the default serializer for Jest to be from enzyme-to-json
// This produces an easirt to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Make Enzyme functions available in all test files without importing
global.React = React
global.shallow = shallow
global.render = render
global.mount = mount

jest.mock('winston', () => {
  const logger = {
    debug: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    log: jest.fn(),
    warn: jest.fn()
  }
  const loggers = {
    add: jest.fn(),
    get: jest.fn().mockReturnValue(logger)
  }

  const winstonMock = {
    format: {
      printf: jest.fn(),
      timestamp: jest.fn(),
      simple: jest.fn(),
      colorize: jest.fn(),
      combine: jest.fn(),
      splat: jest.fn(),
      label: jest.fn(),
      metadata: jest.fn()
    },
    level: jest.fn(),
    transports: {
      Console: jest.fn(),
      File: jest.fn()
    },
    exitOnError: jest.fn(),
    createLogger: jest.fn().mockImplementation(function(creationOpts) {
      return {
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn()
      }
    }),
    loggers: loggers
  }

  return winstonMock
})
