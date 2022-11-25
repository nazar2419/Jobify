import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer, Loading, ChartsContainer } from "../../components"

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
<<<<<<< HEAD
=======
    // eslint-disable-next-line
>>>>>>> added debounce function for search
  }, [])

  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer/>
<<<<<<< HEAD
      <ChartsContainer />
      {/* {monthlyApplications.length > 0 && <ChartsContainer />} */}
=======
      {monthlyApplications.length > 0 && <ChartsContainer />}
>>>>>>> added debounce function for search
    </>
  )
}

export default Stats