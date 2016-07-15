import albums from './albums'
import { SET_ALBUMS } from '../../actions'

/* eslint-env mocha */

describe('album reducer', () => {
  it(`should handle a ${SET_ALBUMS}`, () => {
    const result = albums([], {
      type: SET_ALBUMS,
      albums: [{
        title: 'MySuperAlbum',
      }],
    })
    result.should.be.deep.equal([{
      title: 'MySuperAlbum',
    }])
  })

  it('should not modify the state when the action cannot be handle', () => {
    const result = albums(
      [{ title: 'MySuperAlbum' }],
      { type: 'NOT_HANDLED', data: 'some data' }
    )
    result.should.be.deep.equal([{ title: 'MySuperAlbum' }])
  })
})
