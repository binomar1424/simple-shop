import React, { lazy, useContext, useState } from 'react'
import '../styles/LandingPage.css'
import { Page, Section } from '../components/tags'
import TopBar from '../components/TopBar'
import BlogDisplay from '../components/BlogDisplay'
import { WebContext } from '../WebContext'
import LoadingPage from './LoadingPage'

const AddBlogPage = lazy(() => import('./AddBlogPage'));

function LandingPage() {
  const {showBlogPopUp, setShowBlogPopUp} = useContext(WebContext);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // isLoaded ? (
      <Page className='landing_page'>
          {/* T O P   S E C T I O N */}
          <Section className='top_section'>
              <TopBar />

              <section className='landing_page_welcome_section'>
                  <h1>Product Tracking system</h1>
              </section>
          </Section>

          <Section className='landing_page_blog_section'>
              <BlogDisplay />
          </Section>

          {showBlogPopUp && (
            <Section className='add_blog_sec'>
              <AddBlogPage />
            </Section>
          )}
      </Page>
    // ) : (
    //   <LoadingPage />
    // )
  )
}

export default LandingPage