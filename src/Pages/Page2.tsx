import styled from 'styled-components'
import {GoPerson} from 'react-icons/go'
import {BsBook} from 'react-icons/bs'
import {BiPen} from 'react-icons/bi'
import {LuMailOpen} from 'react-icons/lu'
import {MdOutlineContactSupport} from 'react-icons/md'


const Page5 = () => {
  return (
    <div>
        <Container>
            <Wrapper>
            <Header>
                    <h1>Please fill in your details</h1>
                    <p>Follow the simple 5 steps to complete your process</p>
                </Header>
                <Hr hr="100%"/>
                <div style={{display:"flex"}}>
                    <Process>
                        <Liner/>
                    <Holder>
    <Info >
        <h3 >Your name</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle ><GoPerson size={20}/> </Circle>
                    </Holder>
                    
                    <Holder>
    <Info cl="true">
        <h3>Contacts</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle bcc="true">< MdOutlineContactSupport size={20}/> </Circle>
                    </Holder>
                    
                    <Holder>
    <Info>
        <h3>Services</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle><BiPen size={20}/> </Circle>
                    </Holder>
                    
                    <Holder>
    <Info>
        <h3>Describes</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle><BsBook size={20}/> </Circle>
                    </Holder>
                    
                    <Holder>
    <Info >
        <h3>Complete</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle><LuMailOpen size={20}/> </Circle>
                    </Holder>
                    </Process>
                    <Line/>
                   
                    <InputBlock>
                    <Div>
                        <Round />
                        <Round bcc="true"/>
                        <Round/>
                        <Round/>
                        <Round />
                    </Div>
                    <Wrap>
                    <Step>Step 2 of 5</Step>
                    <Header>
                    <h1>Contact & Address</h1>
                    <p>Please input your contact addresses so  we know how to reach you.</p>
                </Header>
                <Hr hr="85%" mt="hg"/>
                <br/>
                <InputHold>
                <Label>Phone number</Label>
                <Input type="number" id="name"/>
                </InputHold>

                <InputHold>
                <Label>Address</Label>
                <Input placeholder='Home or Company.' id="pwd"/>
                </InputHold>
                <div style={{display:"flex", justifyContent:"flex-end", width:"85%"}}>
                <Button cl="" bcc="white"
                onClick={()=>{
                    localStorage.setItem("page", JSON.stringify(1))
                    window.location.reload()
                }}
                >Back</Button>
                <Button cl="true" bcc="#06da06cd"
                onClick={()=>{
                    localStorage.setItem("page", JSON.stringify(3))
                    window.location.reload()
                }}
                >Next step</Button>

                </div>
                    </Wrap>
                    </InputBlock>
                </div>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Page5;
const Button = styled.button<{bcc:string, cl:string}>`
width:100px;
height: 40px;
border-radius: 20px;
border:none;
background-color: ${({bcc})=>bcc} ;
color:${({cl}) => (cl ? "white" : "black")};
font-size:14px;
font-weight: 500;
cursor:pointer;
/* justify-self:end; */
    
`

const Round = styled.div<{bcc?:string}>`
    width:10px;
    height:10px;
    border-radius:50%;
    background-color: ${({bcc})=> (bcc ? "green" : "grey")};
    margin-bottom:35px;
`

const Div = styled.div`
position:absolute;
height:420px;
display: flex;
flex-direction: column;
justify-content: space-around;
right:704.5px;
top:20px;
`

const InputHold = styled.div`
width:85%;
height:35%;
/*  background-color: orange; */
margin-bottom:15px;

`

const Label = styled.div`
font-size:13.5px;
margin-bottom:5px;`

const Input = styled.input`
width:99%;
height: 45px;
outline:1px solid green;
border-radius:10px;
border:1px solid black;
/* font-family:Poppins; */
&::placeholder{
    /* font-family:Poppins */
padding:10px;

}
`

const Step = styled.div`
font-size:14px;
/* color:grey; */
`

const Wrap= styled.div`
    width:90%;
    height:90%;
margin-top:15px;
/* display: flex; */
/* justify-content: space-between; */
/* flex-direction: column; */

`

const Liner = styled.hr`
width:0.5px;
height:340px;
background-color:grey;
position:absolute;
right:95px;
/* z-index:0; */
`

const Info = styled.div<{cl?:string}>`
width:150px;
height:45px;
/* background-color:red; */
text-align:end;
h3{
    font-size:16px;
    font-weight:550;
    color:${({cl})=>(cl ? "black" : "grey")};
};
p{
    font-size:13.3px;
    color:grey;
}`

const Circle = styled.div<{bcc? :string}>`
width:45px;
height:45px;
font-size:22px;
z-index:1;
color: white;
background-color:${({bcc})=> (bcc ? "green" : "darkgrey")};
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
`

const Holder = styled.div`
width:65%;
min-height:70px;
/* background-color:pink; */
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom:20px;`

const Line = styled.hr`
height:470px;
width:1px;
background-color:grey;
/* position: relative; */
`

const InputBlock = styled.div`
width:68%;
height:84%;
margin-top:20px;
/* background-color:blue; */
/* z-index:1; */
display: flex;
position:relative;
justify-content: center;
align-items: center;
`

const Process = styled.div`
width:35%;
height:90%;
margin-top:20px;
display: flex;
align-items: center;
position:relative;
justify-content: center;
flex-direction:column;
background-color:white;
`

const Hr = styled.hr<{hr:string, mt?:string}>`
width: ${({hr})=>hr};
background-color:grey;
height:1px;
margin-top:${({mt})=> (mt ? "15px" : "0")}`

const Header = styled.div`
/* background-color:orange; */
margin-bottom:9px;
height:16%;
width:70%;
p{
    font-size:12px;
}`

const Wrapper = styled.div`
/* background-color:red; */
width:70%;
height:80%;`

const Container = styled.div`
width:100%;
height:100vh;
display: flex;
justify-content: center;
align-items: center;`