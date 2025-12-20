"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Upload,
  Image as ImageIcon,
  X,
  Save,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import BlogEditor from "@/components/ui/blog-editor";

export default function CreateNews() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPublished, setIsPublished] = useState(false);
  const [content, setContent] = useState("");

  const validateForm = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};
    const formData = new FormData(form);

    if (!formData.get("title")?.toString().trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.get("description")?.toString().trim()) {
      newErrors.description = "Description is required";
    }

    if (!content.trim()) {
      newErrors.content = "Content is required";
    }

    if (!formData.get("category")?.toString().trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.get("optional_link")?.toString().trim()) {
      const link = formData.get("optional_link")?.toString().trim() || "";
      const urlPattern =
        /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/i;
      if (link && !urlPattern.test(link)) {
        newErrors.optional_link = "Please enter a valid URL";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, image: "Please upload an image file" }));
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: "Image size should be less than 5MB",
      }));
      return;
    }

    setImageFile(file);
    setErrors((prev) => ({ ...prev, image: "" }));

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const form = e.currentTarget;

    if (!validateForm(form)) {
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData(form);

      // Add image file to form data if exists
      if (imageFile) {
        formData.set("image", imageFile);
      }

      // Convert checkbox value to string "true"/"false"
      formData.set("isPublished", isPublished.toString());

      // Add content from state to formData
      formData.set("content", content);

      const res = await fetch("/api/news", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        router.push("/admin/news");
        router.refresh();
      } else {
        const error = await res.json();
        throw new Error(error.message || "Failed to create news");
      }
    } catch (error: any) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Failed to create news",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/admin/news")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create News Article
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in the details to create a new news article
              </p>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{errors.submit}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  name="title"
                  placeholder="Enter news title"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  disabled={loading}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Description *
                </label>
                <input
                  name="description"
                  placeholder="Enter a brief description"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  disabled={loading}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${
                      errors.category ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={loading}
                  >
                    <option value="">Select a category</option>
                    <option value="Politics">Politics</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Sports">Sports</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Science">Science</option>
                    <option value="Law">Law</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Publication Status
                  </label>
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
                    <div
                      className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      } ${isPublished ? "bg-green-500" : "bg-gray-400"}`}
                      onClick={() => !loading && setIsPublished(!isPublished)}
                    >
                      <div
                        className={`w-6 h-6 rounded-full shadow transform transition-transform ${
                          isPublished
                            ? "translate-x-5 bg-white"
                            : "translate-x-0 bg-white"
                        }`}
                      />
                    </div>
                    <label
                      className={`cursor-pointer select-none ${
                        loading ? "opacity-50" : ""
                      }`}
                      onClick={() => !loading && setIsPublished(!isPublished)}
                    >
                      Publish immediately
                    </label>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    If unchecked, the article will be saved as a draft
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Featured Image
            </label>

            <div className="space-y-4">
              {/* Image Preview */}
              {imagePreview ? (
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <div className="relative h-64 md:h-96">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Upload Area */
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    errors.image
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                  onClick={() => !loading && fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={loading}
                  />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium mb-1">
                    Click to upload image
                  </p>
                  <p className="text-gray-500 text-sm">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              )}

              {errors.image && (
                <p className="text-sm text-red-600">{errors.image}</p>
              )}
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Content *
              </label>
              <span className="text-sm text-gray-500">
                Supports Markdown formatting
              </span>
            </div>

            <BlogEditor
              value={content}
              onChange={
                (value) => {
                  setContent(value);
                } /* Update state on content change */
              }
              placeholder="Write your news content here..."
              isDisabled={loading}
            />
            {errors.content && (
              <p className="mt-1 text-sm text-red-600">{errors.content}</p>
            )}
          </div>

          {/* Optional Link to redirect if not using id news */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Optional Link if you want to redirect to another URL
            </label>
            <input
              name="optional_link"
              placeholder="Enter an optional URL to redirect to"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${
                errors.optional_link ? "border-red-500" : "border-gray-300"
              }`}
              disabled={loading}
            />
            {errors.optional_link && (
              <p className="mt-1 text-sm text-red-600">
                {errors.optional_link}
              </p>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.push("/admin/news")}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Create News Article
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
