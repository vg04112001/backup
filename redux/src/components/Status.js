import  useOnlineStatus  from '../customHooks/useOnlineStatus';

function StatusBar() {
  const statusVar = useOnlineStatus();
  return <h2>{statusVar ? '✅ Online' : '❌ Disconnected'}</h2>;
}

function SaveButton() {
  const saveVar = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!saveVar} onClick={handleSaveClick}>
      {saveVar ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function Status() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
