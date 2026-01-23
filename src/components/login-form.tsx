
'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useForm } from "@tanstack/react-form"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"

import { Input } from "./ui/input"
import * as z from 'zod'
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"
const formSchema = z.object({
  password:z.string().min(8,'minimum length is required'),
  email:z.email()
})



export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {

  const form = useForm({defaultValues:{
    email:"",
    password:""
  },validators:{
    onSubmit:formSchema
  }
  ,onSubmit:async({value})=>{
 try {
    const toastid= toast.loading("loginiing user")
    const {data,error}=await authClient.signIn.email(value)
    if(error){
      toast.error(error.message,{id:toastid})
      return
    }
    toast.success('user login sucessfully')
  
 } catch (error) {
  toast.error("someting went wrong please try again")
  
 }
  }})
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e)=>{
          e.preventDefault()
          form.handleSubmit();
        }}>
        <FieldGroup className="space-x-1.5 space-y-1">

           <form.Field name="email" children={(field)=>{
             const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <>
               <Field>
                 <FieldLabel>email</FieldLabel>
                 <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="text"
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Login button not working on mobile"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
               </Field>

                <form.Field name="password" children={(field)=>{
                    const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
            return (
              <>
               <Field>
                 <FieldLabel>password</FieldLabel>
                 <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      type="text"
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Login button not working on mobile"
                      autoComplete="off"
                    />
                       {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
               </Field>
              </>
            )
          }}/>
              </>
            )
          }}/>
        </FieldGroup>

<button type="submit" className="bg-blue-800 rounded-lg px-4 py-2 mt-3">click here</button>
        </form>
      </CardContent>
    </Card>
  )
}
