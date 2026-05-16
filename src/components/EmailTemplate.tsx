import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Hr,
  Link,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate = ({ name, email, message }: ContactEmailProps) => {
  const previewText = `New message from ${name}`;

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              bgDark: '#050505',
              textMain: '#ffffff',
              textSecondary: '#888888',
              highlight: '#ce6e6e',
              borderGrid: '#1a1a1a',
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              serif: ['Playfair Display', 'serif'],
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Body className="bg-bgDark my-auto mx-auto font-sans px-2 text-textMain">
          <Preview>{previewText}</Preview>
          <Container className="border border-solid border-borderGrid rounded-lg my-[40px] mx-auto p-[30px] max-w-[500px] bg-[#0a0a0a]">
            <Section className="mt-[10px]">
              <Heading className="text-textMain text-[28px] font-normal text-center p-0 my-[10px] mx-0 font-serif">
                New Message Received
              </Heading>
              
              <Text className="text-textSecondary text-[15px] leading-[24px] text-center mb-[30px]">
                You have a new contact form submission from your portfolio website.
              </Text>
              
              <Hr className="border border-solid border-borderGrid my-[20px] mx-0 w-full" />
              
              <Section className="my-[20px]">
                <Text className="text-textMain text-[15px] leading-[24px] m-0 mb-[8px]">
                  <span className="text-textSecondary text-[12px] uppercase tracking-wider block mb-1">Name</span>
                  {name}
                </Text>
                
                <Text className="text-textMain text-[15px] leading-[24px] m-0 mt-[24px]">
                  <span className="text-textSecondary text-[12px] uppercase tracking-wider block mb-1">Email Address</span>
                  <Link href={`mailto:${email}`} className="text-highlight underline decoration-highlight decoration-solid underline-offset-4">
                    {email}
                  </Link>
                </Text>
              </Section>
              
              <Hr className="border border-solid border-borderGrid my-[20px] mx-0 w-full" />
              
              <Section className="mt-[20px] mb-[10px]">
                <Text className="text-textSecondary text-[12px] uppercase tracking-wider block mb-2">
                  Message
                </Text>
                <Section className="bg-[#111111] border border-solid border-borderGrid rounded-md p-5">
                  <Text className="text-textMain text-[15px] leading-[24px] m-0 whitespace-pre-wrap font-sans">
                    {message}
                  </Text>
                </Section>
              </Section>

            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

ContactEmailTemplate.PreviewProps = {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hi Gabriel,\n\nI loved your portfolio and would like to discuss a potential project with you. Please let me know when you are available for a chat.\n\nBest,\nJohn',
} satisfies ContactEmailProps;

export default ContactEmailTemplate;