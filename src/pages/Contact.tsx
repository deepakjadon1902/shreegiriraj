import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

type SubjectType = 'booking' | 'inquiry';

const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  phone: z.string().trim().min(10, 'Please enter a valid phone number').max(15),
  subject: z.literal('booking'),
  duration: z.string().trim().min(1, 'Please specify duration of stay'),
  guests: z.string().trim().min(1, 'Please specify number of guests'),
  roomType: z.string().trim().min(1, 'Please select a room type'),
  message: z.string().trim().max(1000).optional(),
});

const inquirySchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  phone: z.string().trim().min(10, 'Please enter a valid phone number').max(15),
  subject: z.literal('inquiry'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [subject, setSubject] = useState<SubjectType>('booking');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '',
    guests: '',
    roomType: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const dataToValidate = {
      ...formData,
      subject,
    };

    try {
      if (subject === 'booking') {
        bookingSchema.parse(dataToValidate);
      } else {
        inquirySchema.parse(dataToValidate);
      }

      // Build WhatsApp message with all form details
      let whatsappMessage = `🙏 Jai Shri Krishna!\n\n`;
      whatsappMessage += `*${subject === 'booking' ? 'Booking Inquiry' : 'General Inquiry'}*\n\n`;
      whatsappMessage += `*Name:* ${formData.name}\n`;
      whatsappMessage += `*Email:* ${formData.email}\n`;
      whatsappMessage += `*Phone:* ${formData.phone}\n`;
      
      if (subject === 'booking') {
        whatsappMessage += `*Duration of Stay:* ${formData.duration}\n`;
        whatsappMessage += `*Number of Guests:* ${formData.guests}\n`;
        whatsappMessage += `*Preferred Room Type:* ${formData.roomType}\n`;
      }
      
      if (formData.message) {
        whatsappMessage += `\n*Message:*\n${formData.message}`;
      }

      // Open WhatsApp with the message
      const whatsappUrl = `https://wa.me/919927600017?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      // Show success state
      setIsSubmitted(true);
      toast({
        title: "Redirecting to WhatsApp!",
        description: "Your message details have been prepared for WhatsApp.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      duration: '',
      guests: '',
      roomType: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <Layout>
      {/* Hero Section with Reception Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/giriraj reception.jpeg"
            alt="Reception area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-white/90 font-medium text-sm uppercase tracking-widest mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              संपर्क करें
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
              हमसे संपर्क करें
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white/50 via-white to-white/50 mx-auto rounded-full mb-8" />
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              कोई प्रश्न है या बुकिंग करना चाहते हैं? हमसे संपर्क करें—आपके आध्यात्मिक प्रवास की योजना बनाने में सहायता हेतु हम यथाशीघ्र उत्तर देंगे।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <address className="not-italic text-muted-foreground leading-relaxed">
                        Keshav Dham Road,<br />
                        In front of Prem Mandir,<br />
                        Shri Vrindavan - 281121
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-spiritual-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-spiritual-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                      <div className="space-y-1">
                        <a href="tel:+919927600017" className="block text-muted-foreground hover:text-primary transition-colors">
                          +91 99276 00017
                        </a>
                        <a href="tel:+919927600019" className="block text-muted-foreground hover:text-primary transition-colors">
                          +91 99276 00019
                        </a>
                        <a href="tel:+919927600029" className="block text-muted-foreground hover:text-primary transition-colors">
                          +91 99276 00029
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-spiritual-yellow/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-spiritual-yellow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:shreegirirajsewasadan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        shreegirirajsewasadan@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-spiritual-red/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-spiritual-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        24 Hours / 7 Days a Week<br />
                        <span className="text-sm">We're always available to serve you</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919927600017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-spiritual-green hover:bg-spiritual-green/90 text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </Button>
                  </a>
                  <a href="tel:+919927600017" className="block">
                    <Button variant="outline" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2!2d77.6!3d27.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVnJpbmRhdmFu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 rounded-xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-spiritual-green/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-spiritual-green" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully. We'll get back to you 
                    within 24 hours.
                  </p>
                  <Button onClick={resetForm}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Subject Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={subject}
                        onValueChange={(value: SubjectType) => setSubject(value)}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          <SelectItem value="booking">Booking Inquiry</SelectItem>
                          <SelectItem value="inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className={`bg-background ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className={`bg-background ${errors.email ? 'border-destructive' : ''}`}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className={`bg-background ${errors.phone ? 'border-destructive' : ''}`}
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Booking-specific fields */}
                    {subject === 'booking' && (
                      <>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="duration">Duration of Stay *</Label>
                            <Input
                              id="duration"
                              value={formData.duration}
                              onChange={(e) => handleInputChange('duration', e.target.value)}
                              placeholder="e.g., 3 nights"
                              className={`bg-background ${errors.duration ? 'border-destructive' : ''}`}
                            />
                            {errors.duration && <p className="text-sm text-destructive">{errors.duration}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="guests">Number of Guests *</Label>
                            <Input
                              id="guests"
                              type="number"
                              min="1"
                              value={formData.guests}
                              onChange={(e) => handleInputChange('guests', e.target.value)}
                              placeholder="e.g., 2"
                              className={`bg-background ${errors.guests ? 'border-destructive' : ''}`}
                            />
                            {errors.guests && <p className="text-sm text-destructive">{errors.guests}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="roomType">Preferred Room Type *</Label>
                          <Select
                            value={formData.roomType}
                            onValueChange={(value) => handleInputChange('roomType', value)}
                          >
                            <SelectTrigger className={`bg-background ${errors.roomType ? 'border-destructive' : ''}`}>
                              <SelectValue placeholder="Select room type" />
                            </SelectTrigger>
                            <SelectContent className="bg-background">
                              <SelectItem value="non-ac">Non-AC Room</SelectItem>
                              <SelectItem value="ac">AC Room</SelectItem>
                              <SelectItem value="four-occupancy">Four Occupancy Room</SelectItem>
                              <SelectItem value="multi-occupancy">Multi-Occupancy Room</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.roomType && <p className="text-sm text-destructive">{errors.roomType}</p>}
                        </div>
                      </>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message {subject === 'inquiry' ? '*' : '(Optional)'}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder={
                          subject === 'booking'
                            ? "Any special requirements or questions..."
                            : "How can we help you?"
                        }
                        rows={4}
                        className={`bg-background ${errors.message ? 'border-destructive' : ''}`}
                      />
                      {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
