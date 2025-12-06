"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Upload,
  Image as ImageIcon,
  X,
  Save,
  Loader2,
  ArrowLeft,
  Eye,
  EyeOff,
  Calendar,
  Clock,
} from "lucide-react";

interface NewsData {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  isPublished: boolean;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function EditNews({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [data, setData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPublished, setIsPublished] = useState<boolean>(false);

  async function loadData() {
    try {
      setLoading(true);
      const res = await fetch(`/api/news/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch news");
      const json = await res.json();
      setData(json);
      setIsPublished(json.isPublished);
      if (json.image) {
        setImagePreview(json.image);
      }
    } catch (error) {
      console.error("Error loading news:", error);
      setErrors({ fetch: "Failed to load news data" });
    } finally {
      setLoading(false);
    }
  }

  const validateForm = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};
    const formData = new FormData(form);

    if (!formData.get("title")?.toString().trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.get("description")?.toString().trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.get("content")?.toString().trim()) {
      newErrors.content = "Content is required";
    }

    if (!formData.get("category")?.toString().trim()) {
      newErrors.category = "Category is required";
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
    setSaving(true);
    setErrors({});

    const form = e.currentTarget;

    if (!validateForm(form)) {
      setSaving(false);
      return;
    }

    try {
      const formData = new FormData(form);

      // Add image file to form data if exists
      if (imageFile) {
        formData.set("image", imageFile);
      }

      formData.set("isPublished", isPublished.toString());

      const res = await fetch(`/api/news/${params.id}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        router.push("/admin/news");
        router.refresh();
      } else {
        const error = await res.json();
        throw new Error(error.message || "Failed to update news");
      }
    } catch (error: any) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || "Failed to update news",
      }));
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin mx-auto mb-3" />
          <p className="text-gray-600">Loading news data...</p>
        </div>
      </div>
    );
  }

  if (errors.fetch) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Error</h2>
            <p className="text-red-700">{errors.fetch}</p>
            <button
              onClick={() => router.push("/admin/news")}
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News List
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">
              News Not Found
            </h2>
            <p className="text-yellow-700">
              The requested news article could not be found.
            </p>
            <button
              onClick={() => router.push("/admin/news")}
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News List
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Edit News Article
              </h1>
              <p className="text-gray-600 mt-2">
                Update the details of your news article
              </p>
            </div>
            <div className="flex items-center gap-4">
              {data.createdAt && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(data.createdAt).toLocaleDateString()}</span>
                </div>
              )}
              <div
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                  data.isPublished
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {data.isPublished ? (
                  <>
                    <Eye className="w-3 h-3" />
                    Published
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3 h-3" />
                    Draft
                  </>
                )}
              </div>
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
          {/* Basic Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Basic Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  name="title"
                  defaultValue={data.title}
                  placeholder="Enter news title"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  disabled={saving}
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
                  defaultValue={data.description}
                  placeholder="Enter a brief description"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  disabled={saving}
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
                    defaultValue={data.category}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors ${
                      errors.category ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={saving}
                  >
                    <option value="">Select a category</option>
                    <option value="Politics">Politics</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Sports">Sports</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Science">Science</option>
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
                        saving ? "opacity-50 cursor-not-allowed" : ""
                      } ${isPublished ? "bg-green-500" : "bg-gray-400"}`}
                      onClick={() => !saving && setIsPublished(!isPublished)}
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
                        saving ? "opacity-50" : ""
                      }`}
                      onClick={() => !saving && setIsPublished(!isPublished)}
                    >
                      Publish article
                    </label>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Toggle to change publication status
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Featured Image
              </label>
              {imagePreview && (
                <span className="text-sm text-gray-500">
                  Click the image to replace it
                </span>
              )}
            </div>

            <div className="space-y-4">
              {/* Image Preview */}
              {imagePreview ? (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden border border-gray-200">
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={imagePreview}
                        alt={data.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        type="button"
                        onClick={() => !saving && fileInputRef.current?.click()}
                        className="p-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                        title="Replace image"
                      >
                        <Upload className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={removeImage}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        title="Remove image"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={saving}
                  />
                </div>
              ) : (
                /* Upload Area */
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    errors.image
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                  onClick={() => !saving && fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={saving}
                  />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium mb-1">
                    Click to upload or replace image
                  </p>
                  <p className="text-gray-500 text-sm">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              )}

              {errors.image && (
                <p className="text-sm text-red-600">{errors.image}</p>
              )}

              <p className="text-sm text-gray-500">
                {imagePreview && data.image && imagePreview === data.image
                  ? "Current image is displayed above. Upload a new image to replace it."
                  : "Upload a new image to replace the current one."}
              </p>
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

            <textarea
              name="content"
              defaultValue={data.content}
              placeholder="Write your news content here..."
              className={`w-full min-h-[400px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-y ${
                errors.content ? "border-red-500" : "border-gray-300"
              }`}
              disabled={saving}
            />
            {errors.content && (
              <p className="mt-1 text-sm text-red-600">{errors.content}</p>
            )}

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <ImageIcon className="w-4 h-4" />
              <span>
                You can embed images using markdown: ![alt text](image-url)
              </span>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Last updated:{" "}
                {data.updatedAt
                  ? new Date(data.updatedAt).toLocaleString()
                  : "Never"}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.push("/admin/news")}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={saving}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving Changes...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Update News Article
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
