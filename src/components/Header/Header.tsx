const Header = ({ isConnected }: { isConnected: boolean }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">
        WebSocket Broadcast Demo
      </h1>
      <div
        className={`mb-4 text-center ${isConnected ? 'text-green-500' : 'text-red-500'}`}
      >
        {isConnected ? 'Connected' : 'Disconnected'}
      </div>
    </>
  )
}

export default Header
