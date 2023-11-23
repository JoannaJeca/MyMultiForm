import styled from 'styled-components'
import {GoPerson} from 'react-icons/go'
import {BsBook} from 'react-icons/bs'
import {BiPen} from 'react-icons/bi'
import {LuMailOpen} from 'react-icons/lu'
import {AiFillCamera} from 'react-icons/ai'
import {MdOutlineContactSupport} from 'react-icons/md'
import pix from "../assets/dummy.jpg"
import {useState} from 'react'


const Page4 = () => {
const [image, setImage] = useState<string>("")
const [avatar, setAvatar] = useState<string>(pix)


const getter = JSON.parse(localStorage.getItem("data")!)
const [desc, setDesc] = useState<string>(getter?.desc)

const onHandleImage = (e:any) =>{
    const file =  e.target.files![0]
    const readyImage = URL.createObjectURL(file)

    setImage(file)
    setAvatar(readyImage)
}
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
    <Info>
        <h3>Contacts</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle>< MdOutlineContactSupport size={20}/> </Circle>
                    </Holder>
                    
                    <Holder>
    <Info>
        <h3>Services</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle><BiPen size={20}/> </Circle>
                    </Holder>
                    
                    <Holder>
    <Info cl="true">
        <h3>Describes</h3>
        <p>Browse and upload</p>
    </Info>
    <Circle bcc="true"><BsBook size={20}/> </Circle>
                    </Holder>
                    
                    <Holder>
    <Info>
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
                        <Round/>
                        <Round />
                        <Round bcc="true"/>
                        <Round/>
                    </Div>
                    <Wrap>
                    <Step>Step 4 of 5</Step>
                    <Header>
                    <h1>Short Business description</h1>
                    <p>Please tell us more about yourself and (or) your company.</p>
                </Header>
                <Hr hr="85%" mt="hg"/>
                <br/>
                <div style={{display:"flex", justifyContent:"center", width:"85%", }}>
                <Profile src={avatar}/>
                <input
                 type="file"
                 id="any"
                 onChange={onHandleImage}
                 
                 style={{display:"none"}}/>
                 <Label htmlFor="any">
                <FillCamera/>
                 </Label>
                </div>
                <InputHold>
                <Labell>Description</Labell>
                <Input placeholder="Type here your message"
                value={desc}
                onChange={(e:any)=>{
                    setDesc(e.target.value)
                }}/>
                </InputHold>

               
                <div style={{display:"flex", justifyContent:"flex-end", width:"85%"}}>
                <Button cl="" bcc="white"
                onClick={()=>{
                    localStorage.setItem("page", JSON.stringify(3))
                    window.location.reload()
                }}
                >Back</Button>
                <Button cl="true" bcc="#06da06cd"
                onClick={()=>{
                    localStorage.setItem("page", JSON.stringify(5))
                    window.location.reload()


                    let obj:object = {
                        firstName: getter?.firstName, lastName: getter?.lastName, number:getter?.num, Address: getter?.address, value:getter?.value, val:getter?.val, desc, avatar
                    }
                    localStorage.setItem("data", JSON.stringify(obj))
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

export default Page4;
const FillCamera = styled(AiFillCamera)`
font-size:35px;
color:white;
/* bottom:6px; */
/* right:249px; */

`

const Label = styled.label`
    width:89px;
    height: 89px;
position:absolute;
transition:all 350ms;
opacity:1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
/* top:0; */
/* left:0; */
background-color: rgba(0,0,0,0.7);
`

const Profile = styled.img`
    width:89px;
    height: 89px;
    position:relative;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    transition:all 350ms;
    
    &:hover{
        ${Label}{
            opacity:1
        }
    }
`

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
right:706px;
top:20px;
`

const InputHold = styled.div`
width:85%;
height:35%;
/*  background-color: orange; */
margin-bottom:15px;

`

const Labell = styled.div`
font-size:13.5px;
margin-bottom:5px;`

const Input = styled.input`
width:99%;
height: 75px;
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