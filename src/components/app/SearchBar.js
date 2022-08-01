import React from 'react'
import zoom from '../../assets/app/zoom.png'
import filteric from '../../assets/app/filteric.png'
import '../../styles/AppFrags/searchbar.scss'

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <button>
                <img src={zoom} alt="" />
            </button>
            <input type="text" placeholder='Search' />
            <button>
                <img src={filteric} alt="" />
            </button>
        </div>
    )
}

export default SearchBar