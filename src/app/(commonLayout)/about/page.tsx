export const dynamic = 'force-dynamic' 
export const AboutPage = async() => {
  await new Promise((resolve)=>setTimeout(resolve,1000))
  return (
    <div>
        this is about page
    </div>
  )
}
export default AboutPage
