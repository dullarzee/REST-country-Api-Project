import PropTypes from 'prop-types'

MainContent.propTypes = {
    children: PropTypes
}

export default function MainContent({children})
{
    return(
       <main className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[80%] lg:w-[90%] gap-[2.5rem] mx-auto">
           {children}
       </main>
    );
}