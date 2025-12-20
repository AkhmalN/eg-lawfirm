"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface BlogEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
}

const BlogEditor: React.FC<BlogEditorProps> = ({
  value,
  onChange,
  placeholder = "Write your content here...",
  isDisabled = false,
}) => {
  const [editorValue, setEditorValue] = useState(value);

  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  const handleChange = (content: string) => {
    setEditorValue(content);
    onChange(content);
  };

  return (
    <div className="blog-editor">
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={isDisabled}
        className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
      />
    </div>
  );
};

export default BlogEditor;
