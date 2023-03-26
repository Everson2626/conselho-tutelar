import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Pessoa } from "../components/formulario/models/pessoa.model";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAvy02CciKmQLOqU0SBxUNk8cWWESlr7Lg",
    authDomain: "conselho-tutelar-4c710.firebaseapp.com",
    projectId: "conselho-tutelar-4c710",
    storageBucket: "conselho-tutelar-4c710.appspot.com",
    messagingSenderId: "886683293160",
    appId: "1:886683293160:web:5f1c28063c30678401c05d",
    measurementId: "G-X1MZDTZZ9M"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

export class FirebaseService {

    public async cadastrarPessoa(pessoa: Pessoa){
        try {
          console.log(pessoa);
            const docRef = await addDoc(collection(db, pessoa.dsCidadePrefeitura.code), {
                nmPessoa: pessoa.nmPessoa,
                dsEndereco: pessoa.dsEndereco,
                dsCidade: pessoa.dsCidade,
                dsEmail: pessoa.dsEmail,
                dsCelular: pessoa.dsCelular,
                dsCpf: pessoa.dsCpf,
                dsRg: pessoa.dsRg
            });

            pessoa.imgs.forEach(img => {
              let dsCaminho: string = pessoa.dsCidadePrefeitura.code+"/"+docRef.id+"/"+img.dsImg+"/"+img.value.name
              this.salvarImagem(img,dsCaminho);

            });

          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    public async salvarImagem(file: any, caminhoArquivo: string){
      const storage = getStorage();
      const storageRef = ref(storage, caminhoArquivo);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    }
}