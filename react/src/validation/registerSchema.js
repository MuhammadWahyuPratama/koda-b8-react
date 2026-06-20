import * as yup from "yup";


const registerSchema = yup.object({
    fullName:yup.string().min(3,"Nama Minimal 3 karakter *").required("Nama wajib Diisi"),
    email:yup.string().email("Format email harus valid *").required("Email wajib diisi"),
    password:yup.string().min(6, "Password harus 6 karakter *").required("Password wajib diisi"),
    confirmPassword:yup.string().oneOf([
        yup.ref("password")
    ],"Konfirmasi password tidak sama *").required("Konfirmasi Password wajib diisi")
})

export default registerSchema;
