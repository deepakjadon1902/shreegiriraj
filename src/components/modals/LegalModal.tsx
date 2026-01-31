import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LegalModalProps {
  type: 'privacy' | 'terms';
  children: ReactNode;
}

const privacyContent = `
Last updated: January 2025

1. Information We Collect
We collect information you provide directly to us, such as when you make a booking, contact us, or subscribe to our communications. This may include your name, email address, phone number, and booking preferences.

2. How We Use Your Information
We use the information we collect to:
- Process and manage your bookings
- Communicate with you about your stay
- Send you updates and promotional materials (with your consent)
- Improve our services and guest experience

3. Information Sharing
We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with service providers who assist us in operating our guest house.

4. Data Security
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

5. Your Rights
You have the right to:
- Access your personal information
- Request correction of inaccurate data
- Request deletion of your data
- Opt-out of marketing communications

6. Contact Us
If you have questions about this Privacy Policy, please contact us at:
Vindravan Shri Giriraj Sewa Sadan
Keshav Dham Rd, Vrindavan, Uttar Pradesh 281121
Phone: +91 98098 02980
`;

const termsContent = `
Last updated: January 2025

1. Acceptance of Terms
By accessing and using our services, you accept and agree to be bound by these Terms and Conditions.

2. Booking and Reservations
- All bookings are subject to availability
- A valid ID proof is required at the time of check-in
- Check-in time: 12:00 PM, Check-out time: 11:00 AM
- Early check-in and late check-out are subject to availability

3. Payment Terms
- Full payment is required at the time of booking or check-in
- We accept cash and major payment methods
- Cancellation charges may apply as per our cancellation policy

4. Guest Responsibilities
Guests are expected to:
- Maintain decorum and respect the spiritual environment
- Not engage in any illegal activities on the premises
- Take care of the property and amenities
- Follow all safety guidelines and instructions

5. Cancellation Policy
- Cancellations made 48 hours before check-in: Full refund
- Cancellations made 24-48 hours before check-in: 50% refund
- Cancellations made within 24 hours: No refund

6. Liability
Vindravan Shri Giriraj Sewa Sadan is not responsible for any loss, damage, or theft of personal belongings. Guests are advised to secure their valuables.

7. Rules and Regulations
- Smoking and alcohol consumption is strictly prohibited
- Maintain silence after 10:00 PM
- Visitors must register at reception
- Pets are not allowed

8. Changes to Terms
We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.

9. Contact Information
For any queries regarding these terms, please contact:
Phone: +91 98098 02980, +91 89558 07505
Address: Keshav Dham Rd, Vrindavan, UP 281121
`;

const LegalModal = ({ type, children }: LegalModalProps) => {
  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions';
  const content = type === 'privacy' ? privacyContent : termsContent;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="prose prose-sm max-w-none">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
