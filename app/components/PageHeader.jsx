


export const PageHeader = ({title}) => {

    return(
        <div className="h-[80px] grid place-items-center bg-[url('/images/page-header-bg.jpg')] bg-center bg-cover">
            <h1 className="text-3xl text-white font-semibold">{title}</h1>
        </div>
    )
}