export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mt-10 px-14">
            {children}
        </div>
    );
}
