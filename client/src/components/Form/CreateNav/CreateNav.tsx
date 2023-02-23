import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select';
import { getActivitesFilter, getHotelsFilter } from '../../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks/Hooks';
import Logo from "../../Logo/Logo";
import style from './CreateNav.module.css'

interface InputProps {
  value: string,
  url: string
}

const options = [
  {label: "All", value:"All"},
  {label: "Regular", value:"Regular"},
  {label: "Economic", value:"Economic"},
  {label: "VIP", value:"VIP"}
]
const options1 = [
  {label: "Ascendente", value:"ASC"},
  {label: "Descendente", value:"DESC"}
]
const CreateNav: any = (props: InputProps) =>{
  
  const params = useParams()
  const dispatch = useAppDispatch()
  const state:any = useAppSelector((state) => state.hotels)

  const [order, setOrder] = useState()
  const [filter, setFilter] = useState()

  const handlerInfo = (e:any) => {
    // dispatch<any>(getHotelsFilter(e.value))
    setFilter(e.value)
 }
 const handlerOrder = (e:any) => {
  // dispatch<any>(getHotelsFilterOrder(e.value))
    setOrder(e.value)
 }

  useEffect(() => {
      dispatch(getHotelsFilter(params.cityName,filter, order) as any)
      dispatch(getActivitesFilter(params.cityName,filter, order) as any)
  },[dispatch,order,filter])

  return(
    <nav className={style.nav}>
      <Logo />
      <div>
      <h2>Filter by Category</h2>
        <label> <Select options={options} onChange={e => handlerInfo(e)}/></label>
      </div>

      <div>
        <h2>Filter by Order</h2>
        <label> <Select options={options1} onChange={e => handlerOrder(e)}/></label>
      </div>

      <Link to={props.url}>
        <button className={style.navButton}>{props.value}</button>
      </Link>
    </nav>
  )
}

export default CreateNav;