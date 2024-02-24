import Header from "@/components/Header"

interface Props {
    children: React.ReactNode
}

const Template: React.FC<Props> = ({ children }) => {
    return (
        <div className="container flex flex-col gap-8 pt-4 pb-8">
            <Header />
            {children}
        </div>
    )
}

export default Template