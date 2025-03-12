import TextField from '@mui/material/TextField';

  
export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-gray-400">MochiNut Location</span>
        </h1>
        <p className="text-2xl font-medium text-gray-400">
        </p>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </div>
    );
  }
  