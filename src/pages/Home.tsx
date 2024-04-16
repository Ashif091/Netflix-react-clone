import Loader from "../components/Loader"
import Row from "../components/Row"
import requests from "../Requests"


const Home = () => {
  return (
    <>
     <Loader/>
    <Row  rowId='1'  title='UpComing' fetchURL={requests.requestUpcoming}></Row>
    <Row  rowId='2' title='Popular' fetchURL={requests.requestPopular}></Row>
    <Row  rowId='3' title='Horror' fetchURL={requests.requestHorror}></Row>
    <Row  rowId='4' title='TopRated' fetchURL={requests.requestTopRated}></Row>
    <Row  rowId='5' title='Trending' fetchURL={requests.requestTrending}></Row>
    </>
  )
}

export default Home