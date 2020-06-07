import { useEffect, useState } from 'react';
import * as firebase from 'firebase';

function useFirebase(docsRef: firebase.firestore.DocumentReference) {

  const [value, setValue] = useState<firebase.firestore.DocumentData | undefined>();

  useEffect(() => {
    docsRef.onSnapshot(snapshot => setValue(snapshot.data()))
  }, [docsRef]);

  return value;

}

