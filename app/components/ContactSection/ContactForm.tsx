"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        toast.error("Something went wrong. Please try again later.");
        return;
      }

      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: accessKey,
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
      });

      if (response.data.success) {
        toast.success("Message sent successfully! 🎉");
        reset();
      } else {
        toast.error("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 min-[400px]:gap-y-8 p-6 min-[430px]:p-8 max-w-[600px] min-[1235px]:max-w-[488px] w-full min-[430px]:w-[95%] min-[505px]:w-[90%] 
    min-[600px]:w-[80%] rounded-2xl shadow-2xl"
    >
      <h2 className="text-[#1D1F1E] text-lg min-[420px]:text-xl min-[545px]:text-2xl">
        Fill out the form
      </h2>
      <div className="flex flex-col gap-y-4 min-[400px]:gap-y-6">
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="fullname"
            className="text-[#1D1F1E] text-sm font-medium"
          >
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            className="focus:outline-none text-sm focus:ring-2 focus:ring-blue-300 border border-[#5A687C] 
            rounded-lg px-3 py-2"
            {...register("name", {
              required: "Full name is required.",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
            })}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="text-[#1D1F1E] text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="focus:outline-none text-sm focus:ring-2 focus:ring-blue-300 border border-[#5A687C] 
            rounded-lg px-3 py-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="company"
            className="text-[#1D1F1E] text-sm font-medium"
          >
            Company <span className="text-[#5A687C]">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            className="focus:outline-none text-sm focus:ring-2 focus:ring-blue-300 border border-[#5A687C] 
            rounded-lg px-3 py-2"
            {...register("company")}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="message"
            className="text-[#1D1F1E] text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            className="focus:outline-none text-sm focus:ring-2 focus:ring-blue-300 border border-[#5A687C] 
            rounded-lg px-3 py-2"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          />

          {errors.message && (
            <p className="text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>
      </div>

      <button
        disabled={isSubmitting}
        className="w-full py-3 px-5 bg-[#154FAA] text-white font-medium rounded-lg"
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </form>
  );
}
