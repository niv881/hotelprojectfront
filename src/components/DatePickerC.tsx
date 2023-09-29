import React , {useState} from 'react'
import Datepicker from "tailwind-datepicker-react"

const date = new Date()
const currentDate = date.toDateString()

const DatepickerC = (props : any) => {
  const options = {
    title: props.check,
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date(currentDate),
    theme: {
      background: "bg-white dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-500",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(currentDate),
    language: "en",
  }

	const [show, setShow] = useState (false)
	const handleChange = (selectedDate : Date) => {
    // console.log(props.whatever)
		props.date(`${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${selectedDate.getDate()}`)
	}
	const handleClose = (state : boolean) => {
		setShow(state)
	}

	return (
		<div className='m-3 '>
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}

export default DatepickerC;

