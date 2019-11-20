import css from "../styles/application.scss"
import Link from 'next/link'

export default props => (
  <div className="w-full">
    <div className="flex">
      <div className="flex flex-grow flex-col pr-10 bg-blue-900">
        <div className="flex justify-center items-center flex-grow bg-blue-900 p-6">
          <div className="flex justify-between max-w-md">
            { /* TODO: add icon here */ }
            <h3 className="text-2xl text-white">
              {props.pageTitle}
            </h3>
          </div>
        </div>
        <div className="flex-grow bg-red-600 py-4 px-6">
          <p className="text-base text-center text-white">
            {props.pageSummary}
          </p>
        </div>
      </div>
      <Link href="/">
        <div className="cursor-pointer fixed flex items-center justify-center top-0 right-0 w-10 h-40 bg-blue-900 py-4">
          <p className="absolute w-full text-base text-white capitalize rotate-270 whitespace-no-wrap bottom-0 mb-10">
            return home
          </p>
        </div>
      </Link>
    </div>
    { props.children }
  </div>
)
