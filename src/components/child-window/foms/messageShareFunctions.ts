export const handleSetNowFunction = (setIsImmediateSend: React.Dispatch<React.SetStateAction<boolean>>, setSendingDate: React.Dispatch<React.SetStateAction<string>>) => () => {
    setIsImmediateSend(prevState => !prevState);
    const now = new Date();
    const localNow = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    setSendingDate(localNow);
}

export const handleFileSelectFunction = (setMediaPath: React.Dispatch<React.SetStateAction<string>>) => async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await window.electron.openFile();
    if (result.length > 0) {
        setMediaPath(result[0]);
    }
}
