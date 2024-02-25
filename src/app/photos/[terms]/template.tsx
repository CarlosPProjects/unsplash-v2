import Header from "@/components/Header"

interface Props {
    children: React.ReactNode
}

const Template: React.FC<Props> = ({ children }) => {
    return (
        <div className="container max-md:px-4 min-h-screen flex flex-col gap-10 pt-4 pb-8">
            <Header />
            {children}
        </div>
    )
}

export default Template