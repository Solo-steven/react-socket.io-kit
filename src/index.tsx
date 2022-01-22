import  React, { createContext, useContext, useRef } from "react";
import { io, Socket } from "socket.io-client";

const SocketClient = createContext<Socket>(io());

export function useSocketEmit() {
    const socket: Socket = useContext(SocketClient);
    const emitRef = useRef(socket.emit.bind(socket));
    return emitRef.current;
}
export function useSocketOn() {
    const socket: Socket = useContext(SocketClient);
    const onRef = useRef(socket.on.bind(socket));
    return onRef.current;
}
export function useSocketOff() {
    const socket: Socket = useContext(SocketClient);
    const offRef = useRef(socket.off.bind(socket));
    return offRef.current;
}

export function useSocket() {
    const socket: Socket = useContext(SocketClient);
    return socket;
}

export const  SocketProvider = ({ children, socket }: {children: React.ReactNode, socket: Socket})  => {
    return (
        <SocketClient.Provider value={socket}>
            { children } 
        </SocketClient.Provider>
    )
};