import 'dotenv/config';
const porta = 3000; // Definindo porta

const app = express();
app.use(express.json()) // toda vez que enviar vai converter para json
app.listen(porta, () => console.log('Servidor rodando no link http://localhost:${porta}')); // inicializar servidor 

Routes(app); // chamou a função e passou o app para dentro dela 