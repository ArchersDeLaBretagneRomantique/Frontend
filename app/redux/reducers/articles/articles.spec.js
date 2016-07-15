import articles from './articles'
import { SET_ARTICLES } from '../../actions'

/* eslint-env mocha */

describe('album reducer', () => {
  it(`should handle a ${SET_ARTICLES}`, () => {
    const result = articles([], {
      type: SET_ARTICLES,
      articles: [{
        content: 'MySuperContent',
      }],
    })
    result.should.be.deep.equal([{
      content: 'MySuperContent',
    }])
  })

  it('should not modify the state when the action cannot be handle', () => {
    const result = articles(
      [{ content: 'MySuperContent' }],
      { type: 'NOT_HANDLED', data: 'some data' }
    )
    result.should.be.deep.equal([{ content: 'MySuperContent' }])
  })
})
