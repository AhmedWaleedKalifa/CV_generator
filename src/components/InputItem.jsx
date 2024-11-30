import '../styles/inputItem.css'

export default function InputItem({ id, text = "", type = "text", isInput = true,value,setValue}) {

  function handleChange(e) {
    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        const previewURL = URL.createObjectURL(file);
        setValue(previewURL); // Directly set the URL
      }
    }  else {
      setValue(e.target.value); 
    }

  }
  
  return (
    <>
      <div className='input-div'>
        <label htmlFor={id}>{text}</label>
        {type === "file" ? (
          <input
            type={type}
            id={id}
            onChange={handleChange} 
            accept="image/*" // Optional: restrict to image files
          />
        ) : isInput ? (
          <input
            type={type}
            id={id}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <textarea
            id={id}
            value={value}
            onChange={handleChange}
          ></textarea>
        )}
      </div>
    </>
  );
}
