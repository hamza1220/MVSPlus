import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = () => (
  <ContentLoader 
  	style={{width: "99vw", minHeight:"200vh", backgroundColor: '#141414'}} 
  	backgroundColor="#1c1f22" 
  	foregroundColor="#282c30"
  >

    <rect x="2%" y="80" rx="20" ry="20" style={{width: '96%', height: '90vh'}} />
    <rect x="0.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="11.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="22.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="33.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="44.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="55.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="66.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="77.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>
    <rect x="88.5%" y="100vh" rx="5" ry="5" style={{width: '10.9%', height: '12%'}}/>

    

  </ContentLoader>
)

export default Loader;