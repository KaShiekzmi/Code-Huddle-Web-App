import * as yup from "yup";

export const personalInfoSchema = yup.object({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim(),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email address"),
  headline: yup.string().trim(),
  phone: yup
    .string()
    .trim()
    .required("Phone number is required")
    .test("phone-format", "Please enter a valid phone number", (value) => {
      if (!value) return false;
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      return phoneRegex.test(value) && value.replace(/\D/g, "").length >= 10;
    }),
  countryCode: yup.string().trim().required("Country code is required"),
  address: yup.string().trim().required("Address is required"),
});

export const educationItemSchema = yup
  .object({
    id: yup.string().required(),
    school: yup.string().trim(),
    fieldOfStudy: yup.string().trim(),
    degree: yup.string().trim(),
    startDate: yup.string().when("school", {
      is: (school: string) => school && school.trim().length > 0,
      then: (schema) => schema.required("Start date is required"),
      otherwise: (schema) => schema,
    }),
    endDate: yup.string().when(["school", "isCurrent"], {
      is: (school: string, isCurrent: boolean) =>
        school && school.trim().length > 0 && !isCurrent,
      then: (schema) => schema.required("End date is required"),
      otherwise: (schema) => schema,
    }),
    isCurrent: yup.boolean().default(false),
  })
  .test("date-range", "End date must be after start date", function (value) {
    const { startDate, endDate, isCurrent } = value;
    if (startDate && endDate && !isCurrent) {
      return new Date(startDate) <= new Date(endDate);
    }
    return true;
  });

export const experienceItemSchema = yup
  .object({
    id: yup.string().required(),
    title: yup.string().trim(),
    company: yup.string().trim(),
    industry: yup.string().trim(),
    summary: yup.string().trim(),
    startDate: yup.string().when("title", {
      is: (title: string) => title && title.trim().length > 0,
      then: (schema) => schema.required("Start date is required"),
      otherwise: (schema) => schema,
    }),
    endDate: yup.string().when(["title", "isCurrent"], {
      is: (title: string, isCurrent: boolean) =>
        title && title.trim().length > 0 && !isCurrent,
      then: (schema) => schema.required("End date is required"),
      otherwise: (schema) => schema,
    }),
    isCurrent: yup.boolean().default(false),
  })
  .test("date-range", "End date must be after start date", function (value) {
    const { startDate, endDate, isCurrent } = value;
    if (startDate && endDate && !isCurrent) {
      return new Date(startDate) <= new Date(endDate);
    }
    return true;
  });

export const applicationSchema = yup.object({
  personalInfo: personalInfoSchema,
  education: yup.array().of(educationItemSchema),
  experience: yup.array().of(experienceItemSchema),
  summary: yup.string().trim(),
  documents: yup.array().min(1, "Please upload at least one document"),
  coverLetter: yup.string().trim(),
});

export const validatePersonalInfo = (data: unknown) => {
  return personalInfoSchema.validate(data, { abortEarly: false });
};

export const validateEducation = (data: unknown[]) => {
  return yup
    .array()
    .of(educationItemSchema)
    .validate(data, { abortEarly: false });
};

export const validateExperience = (data: unknown[]) => {
  return yup
    .array()
    .of(experienceItemSchema)
    .validate(data, { abortEarly: false });
};

export const validateDocuments = (data: File[]) => {
  return yup
    .array()
    .min(1, "Please upload at least one document")
    .validate(data, { abortEarly: false });
};

export const validateFileType = (file: File): boolean => {
  const validTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  return validTypes.includes(file.type);
};

export { validateEmail } from "@/services/email/validators";

export const validatePhone = (phone: string): boolean => {
  if (!phone) return false;
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
};

export const validateRequired = (value: string, fieldName: string): string => {
  try {
    yup.string().required(`${fieldName} is required`).validateSync(value);
    return "";
  } catch (error) {
    return error instanceof Error ? error.message : `${fieldName} is required`;
  }
};
