
const Heading = ({title,subTitle}) => {
    return (
        <div className="py-8 text-center font-thin space-y-2">
            <h1 className="text-4xl">{title}</h1>
            <h1 className="text-sm md:text-base">{subTitle}</h1>
        </div>
    );
};

export default Heading;