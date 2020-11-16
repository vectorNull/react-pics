import React from 'react'

class SearchBar extends React.Component {
    render() {
        return <div>
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                    <label>Image Search</label>
                    <input type='text' />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default SearchBar;