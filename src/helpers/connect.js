// @flow
/* eslint-disable no-undef */

import * as React from 'react'

import type { CreateConnect } from '../types'

const connect: CreateConnect = Consumer => mapStateToProps => WrappedComponent => {
  const ConnectedComponent = props => (
    <Consumer>
      {state => {
        const filteredState = mapStateToProps(state || {})
        return (
          <WrappedComponent {...props} {...filteredState} />
        )
      }}
    </Consumer>
  )

  ConnectedComponent.displayName = `Connect(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Unknown'})`

  return ConnectedComponent
}

export default connect
