import BigTextBlock, { BigTextBlockHeroProps } from '@/components/ui/bigTextBlock/BigTextBlock'
import Strengths from '@/components/ui/strengths/Strengths'
import React from 'react'

var heroTexts: BigTextBlockHeroProps = {
  title: 'Who are we?',
  description: 'Lorem ipsum dolor sit amet consectetur. Nunc lacus dolor at donec. Amet et elementum dui ipsum pulvinar et dui fringilla. Faucibus montes feugiat at ac id condimentum. In id rhoncus scelerisque morbi enim feugiat odio tempus eget. Nunc urna sed dictum mattis in condimentum sit egestas. Eleifend odio dignissim ut eleifend ultricies sit pretium sed vulputate. Tempor et nibh nulla non tellus sed amet venenatis enim. Diam id est auctor gravida laoreet massa sed vitae ullamcorper. Odio risus sagittis viverra tincidunt dolor ipsum dignissim gravida. Mauris semper sit et egestas ultricies cursus enim quisque faucibus. Ornare sollicitudin varius augue convallis placerat mauris iaculis donec sagittis. Vel neque tellus suspendisse dui lacinia sit diam vestibulum nulla. Morbi fringilla id eget porttitor ipsum commodo. Ullamcorper vitae scelerisque eget amet leo. Eget varius senectus arcu purus eleifend odio dictumst magna. In ultrices arcu ligula vel elementum eu ac. Sollicitudin lobortis curabitur mus et integer. Est sapien massa lectus sit. Dolor sem non viverra nec odio sodales viverra nibh morbi.'
}

const About = () => {
  return (
    <div className='w-[1312px] m-auto'>
      <BigTextBlock prop={heroTexts} />
      <Strengths />
    </div>
  )
}

export default About