import {useEffect, useState} from "react"
import {FaHeart, FaRegHeart} from "react-icons/fa"
import {MovieType} from "../types/moviesType"
import {UserAuth} from "../context/AuthContext"
import {db} from "../firebase"
import {
  arrayUnion,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore"
interface Props {
  item: MovieType
  index: number
}
type savedMovie = {
  id: number
  img: string
  title: string
}
const Movie = ({item, index}: Props) => {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)

  const [movies, setMovies] = useState<savedMovie[]>() //for edit movie array
  const auth = UserAuth()
  if (!auth) {
    throw new Error("Auth context is null")
  }
  const {user} = auth
  const movieref = doc(db, "users", `${user?.email}`)
  //   movie status data manage ___

  useEffect(() => {
    movies?.map((movie) => {
      if(movie.id === item.id){
        setLike(true)
      }
    })
  }, [movies])

  // ______________________________

  const saveAction = async (id: number) => {
    if (user?.email) {
      setLike(!like)
      // ____________________
      if (like) {
        const res = movies?.filter((item) => item.id != id)
        await updateDoc(movieref, {
          SavedShows: res,
        })
        // _______________
      } else {
        setSaved(true)

        await updateDoc(movieref, {
          SavedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        })
      }
    } else {
      alert("please Log IN to save a movie")
    }
  }
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), {
      next: (doc) => {
        setMovies(doc.data()?.SavedShows)
      },
    })
  }, [user?.email])

  return (
    <div
      key={index}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p
          className="absolute top-4  left-4 text-gray-300"
          onClick={() => saveAction(item.id)}
        >
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  )
}

export default Movie
