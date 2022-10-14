import styled from "styled-components"

export const Body = styled.div`
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content:center;
    /* background-color: black; */
    /* background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); */

    background:
    radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
    background-color:#282828;
    background-size:16px 16px;
    `

export const Header = styled.div`
    /* border: solid orange; */
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #ffffff 0%, #217dff 100%);
    /* background:
    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
    background-color: #131313;
    background-size: 20px 20px; */
    /* display: flex; */
    /* flex-direction: row; */
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
`

export const Logo = styled.img`
    width: 150px;
    /* cursor: pointer; */
`

export const CardMovies = styled.div`
    /* border: 2px solid red; */
    width: 300px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    /* justify-content:center; */
`
export const PosterPath = styled.img`
    /* border: 2px solid violet; */
    width: 300px;
    height: 400px;
    box-sizing: border-box;
    &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

// export const CardMovies = styled.div`
//     /* border: 2px solid red; */
//     width: 300px;
//     height: 254px;    
//     margin: 10px;
//     padding: 5px;
//     display: flex;
//     flex-direction: column;
//     align-items:center;
//     text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
//     /* justify-content:center; */
//     &:hover {
// 		cursor: pointer;
//         background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
//         border-radius: 20px;
//         transition: all .3s;;
//         background-color: #1a1a1a;
//         transition: all .2s;
//         transform: scale(0.98);
//         border-radius: 20px;
//         box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
// 	}
// `
// export const PosterPath = styled.img`
//     /* border: 2px solid violet; */
//     width: 300px;
//     height: 400px;
//     box-sizing: border-box;
//     border-radius: 20px;
//     /* height: 254px; */
   

// `


export const ImagesPoster = styled.div`
    /* border: 2px solid black; */
    box-sizing: border-box;
    height: 400px; 
    display: flex;
    justify-content: center;
`

export const Title = styled.p`
    color: #FFFFFF;
    font-family:'Arial Narrow Bold', sans-serif;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
`


export const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;
`

export const Footer = styled.div`
    /* border: solid orange; */
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #ffffff 0%, #217dff 100%);
    /* display: flex; */
    /* flex-direction: row; */
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
`
export const LogoFooter = styled.img`
    width: 150px;
`

export const TextFooter = styled.div`
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
`

export const PaginationStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Proxima = styled.div`
    width: 500px;
    padding: 1em;
    margin: 1em;
    /* border: 1px solid #ffffff; */
    display: flex;
    justify-content: space-around;
`

export const PaginationButton = styled.div`
    width: 30px;
    height: 30px;
    padding: 1em;
    margin: 1em;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: space-around;
    color: #000000;
    background-color: #ffffff;
    font-weight:bold;
    align-items: center;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
    :active{
        background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
        border-radius: 5px;
        transition: all .3s;;
        background-color: #1a1a1a;        
        transition: all .2s;
        transform: scale(0.98);
        border-radius: 5px;
    }
`

export const PaginationButtonStartEnd = styled.div`
    width: 70px;
    height: 30px;
    padding: 1em;
    margin: 1em;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: space-around;
    color: #000000;
    background-color: #21D4FD;
    background-image: linear-gradien;
    font-weight:bold;
    align-items: center;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
    :active{
        background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
        border-radius: 5px;
        transition: all .3s;;
        background-color: #1a1a1a;        
        transition: all .2s;
        transform: scale(0.98);
        border-radius: 5px;
    }
`