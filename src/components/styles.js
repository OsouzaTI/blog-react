import styled, { keyframes } from 'styled-components'
const cores = require('../colors/colors.json')
export const Grid = styled.div`
    display: grid;
<<<<<<< HEAD
    grid-template-columns: auto;
=======
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    grid-template-rows: 100px auto;
    grid-template-areas: 
        'MN'
        'CT';
    min-height: 100vh;

`;

export const GridContent = styled.div`
    display: grid;
<<<<<<< HEAD
    grid-auto-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 
        'DT';        
=======
    grid-auto-columns: 300px auto;
    grid-template-rows: 300px auto;
    grid-template-areas: 
        'UA DT'
        'LA DT';
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
`;

export const GridPosts = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 
        'PT PT PT';
<<<<<<< HEAD
    padding: 10px;  
    max-width: 60vw;         
`;

export const GridWrite = styled.div`
    display: grid;
=======
    padding: 10px;       
`;

export const GridWrite = styled.div`
      display: grid;
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    grid-auto-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 
        'PT PT PT';
    padding: 10px;  
`;

export const ContainerGridPosts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const LinksArea = styled.div`
    grid-area: LA;
    background-color: ${cores.CONTENT};

    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: thin solid rgba(0, 0, 0, .2);
    border-width: .1;  
    padding: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    a { 
        text-decoration: none;
        color: red;
        margin-bottom: 5px;
    }

    a:hover {
        transition: .2s;
        font-size: 16px;
        border-bottom: 1px solid red;
    }
    font-size: 12px;  
      
    
`;
export const UpdatesArea = styled.div`
    grid-area: UA;
    background-color: ${cores.CONTENT};
`;
export const Data = styled.div`
    grid-area: DT;
    background-color: ${cores.CONTENT};
    border-left: thin solid rgba(0, 0, 0, .2);
    border-width: .1;   
    
     
`;


export const Menu = styled.div`
    grid-area: MN;    
    background-color: ${cores.HEADER};
    display: flex;
    justify-content: center;
    align-items: center;
    /* BOX SHADOW */
    box-shadow: 0px 10px 17px 0px rgba(0,0,0,0.75);
<<<<<<< HEAD

=======
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
`;

export const MenuItem = styled.div`

<<<<<<< HEAD
    width: 90px;
    border: 3px solid;
    background-color: ${cores.BUTTOM};
    text-align: center;
    border-radius: 5px;
    &:hover{
        transition: .3s;
        opacity: .6;         
        
=======
    width: 120px;
    border: 3px solid;
    border-bottom-color: ${cores.BACKGROUND};
    background-color: ${cores.BUTTOM};
    text-align: center;
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
    &:hover{
        transition: .3s;
        opacity: .6; 

>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    }
    
    a {
        text-decoration: none;
        color: white;

    }

    cursor: pointer;

`;

<<<<<<< HEAD
export const MenuItemDropdown = styled.div`

    width: 100px;
    border: 3px solid;
    background-color: ${cores.BUTTOM};
    text-align: center;
    border-radius: 5px;    
    cursor: pointer;

`;

=======
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
export const ContentData = styled.div`
    grid-area: CT;
    background-color: ${cores.BACKGROUND};
    min-height: 100vh;                 
    
`;

<<<<<<< HEAD
export const PostContainer = styled.div` 
    max-width: 80%;
    min-height: 100%;
    text-align: justify;
=======
export const PostContainer = styled.div`
    width: 50rem;
    min-height: 100%;
    text-align: justify;
    padding: 50px 20px;
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    margin: 10px 0px;
    h1, h5 {
        text-align: center;
    }
    background-color: ${cores.CONTENT}; 
    img{
<<<<<<< HEAD
        width: 100%;
        margin: auto;
        margin-bottom: 10px;        
=======
        margin: auto;
        display: block;
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    }
    img:hover{
        transition: .2s;
        transform: scale(1.1);
    }
`;

export const Span = styled.span`
    width: 30px;
    height: 30px;
    padding: 5px;
    text-align: center;
    margin-right: 5px;
    background-color: ${cores.BACKGROUND};
    color: white;
    border-radius: 15px;
    

`;

export const CardAnimation = styled.div`
    
    border-radius: 5px;
    &:hover{
        transition: 1s;
        background-color: #e5e5e5;
        transform: scale(1.1);
        margin: 10px;           
    }    

`;

const fadeIn = keyframes`

    0%, 100% { opacity: 0; }
    20%, 80% { opacity: 1; }

`;

export const AlertMessage = styled.div`

    display: flex;
    position: absolute;
    top: 10px;left: 0px;
    /* background-color: red; */
    width: 100vw;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn}  3s linear forwards;

`;

export const LoadingScreen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: ${cores.BACKGROUND}

`;