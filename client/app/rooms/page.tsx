import Link from "next/dist/client/link"
import Navbar from "../components/classroom/Navbar"
import GroupList from "../components/Group/GroupList"

export default function page() {
  return (
    <div data-aos="fade-left">
        <Navbar />
        <GroupList data-aos="fade-left"  />
    </div>
  )
}
