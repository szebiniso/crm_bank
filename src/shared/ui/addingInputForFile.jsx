import React, { useState } from 'react';

const FileUploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    const updatedFiles = [...selectedFiles];
    updatedFiles[index] = file;
    setSelectedFiles(updatedFiles);
  };

  const handleAddFileInput = () => {
    setSelectedFiles([...selectedFiles, null]);
  };

  const handleRemoveFileInput = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const renderFileInputs = () => {
    return selectedFiles.map((file, index) => (
      <div key={index}>
        <input type="file" onChange={(event) => handleFileChange(event, index)} />
        <button onClick={() => handleRemoveFileInput(index)}>Remove</button>
      </div>
    ));
  };

  return (
    <div>
      {renderFileInputs()}
      <button onClick={handleAddFileInput}>Add File</button>
    </div>
  );
};

export default FileUploadForm;