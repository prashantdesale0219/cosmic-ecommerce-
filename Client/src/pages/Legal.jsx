import { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';

// Legal page components
const TermsOfService = () => (
  <div className="legal-content">
    <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
    
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
        <p className="mb-3">
          Welcome to Serconst ("Serconst", "we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our website, mobile application, and services (collectively, the "Services").
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">2. Account Registration</h3>
        <p className="mb-3">
          To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
        </p>
        <p>
          You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">3. Products and Purchases</h3>
        <p className="mb-3">
          All product descriptions, including pricing, are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.
        </p>
        <p className="mb-3">
          We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on our Services. However, we cannot guarantee that your computer or mobile device's display will accurately reflect the actual color of the products.
        </p>
        <p>
          All purchases made through our Services are subject to our Order Acceptance Policy. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or problems identified by our credit and fraud avoidance department.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">4. Shipping and Delivery</h3>
        <p className="mb-3">
          We will make every effort to ship products within the estimated timeframes indicated at checkout. However, shipping times are estimates and not guaranteed. We are not responsible for delays that are beyond our control.
        </p>
        <p>
          Risk of loss and title for items purchased from our Services pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">5. Returns and Refunds</h3>
        <p className="mb-3">
          Our return and refund policies are outlined in our Returns Policy, which is incorporated into these Terms by reference. By making a purchase through our Services, you agree to be bound by our Returns Policy.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">6. Intellectual Property</h3>
        <p className="mb-3">
          All content included in or made available through our Services, such as text, graphics, logos, images, videos, and software, is the property of Serconst or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p>
          You may not use, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as generally and ordinarily permitted through our Services according to these Terms.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">7. User Content</h3>
        <p className="mb-3">
          Our Services may allow you to post, submit, publish, display, or transmit content ("User Content"). By providing User Content, you grant us a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in connection with our Services.
        </p>
        <p>
          You represent and warrant that you own or control all rights in and to the User Content and have the right to grant the license granted above, and that the User Content does not violate the rights of any third party or any law or regulation.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">8. Prohibited Activities</h3>
        <p>
          You agree not to engage in any of the following prohibited activities: (1) copying, distributing, or disclosing any part of our Services; (2) using any automated system to access our Services; (3) introducing any viruses, trojan horses, worms, or other harmful materials; (4) attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our Services; (5) taking any action that imposes an unreasonable or disproportionately large load on our infrastructure; (6) uploading invalid data, viruses, worms, or other software agents through our Services; (7) collecting or harvesting any personally identifiable information from our Services; (8) impersonating another person or otherwise misrepresenting your affiliation with a person or entity; (9) interfering with the proper working of our Services; or (10) bypassing the measures we may use to prevent or restrict access to our Services.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">9. Disclaimer of Warranties</h3>
        <p>
          OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">10. Limitation of Liability</h3>
        <p>
          IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (1) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES; (2) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES; (3) ANY CONTENT OBTAINED FROM OUR SERVICES; AND (4) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">11. Governing Law</h3>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms or your use of our Services shall be exclusively brought in the courts located in Mumbai, Maharashtra, India, and you consent to the personal jurisdiction of such courts.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">12. Changes to Terms</h3>
        <p>
          We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on our Services and updating the "Last Updated" date. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">13. Contact Information</h3>
        <p>
          If you have any questions about these Terms, please contact us at legal@serconst.com.
        </p>
      </section>
    </div>
    
    <p className="mt-8 text-gray-500">Last Updated: June 1, 2023</p>
  </div>
);

const PrivacyPolicy = () => (
  <div className="legal-content">
    <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
    
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
        <p className="mb-3">
          At Serconst ("Serconst", "we", "our", or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, mobile application, and use our services (collectively, the "Services").
        </p>
        <p>
          Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">2. Information We Collect</h3>
        <p className="mb-3">
          We collect several types of information from and about users of our Services, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> This includes information that can be used to identify you, such as your name, email address, postal address, phone number, and payment information.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> This includes information that does not directly identify you, such as your browser type, IP address, device information, and the pages you visit on our Services.
          </li>
          <li>
            <strong>Transaction Information:</strong> We collect information about your purchases and payment methods.
          </li>
          <li>
            <strong>User Content:</strong> We collect information that you provide when you write reviews, participate in surveys, or communicate with our customer service.
          </li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">3. How We Collect Information</h3>
        <p className="mb-3">
          We collect information in the following ways:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Direct Collection:</strong> Information you provide to us when you register for an account, make a purchase, sign up for our newsletter, or contact our customer service.
          </li>
          <li>
            <strong>Automated Collection:</strong> Information collected automatically through cookies, web beacons, and other tracking technologies when you use our Services.
          </li>
          <li>
            <strong>Third-Party Sources:</strong> Information we may receive from business partners, marketing companies, and service providers.
          </li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">4. How We Use Your Information</h3>
        <p className="mb-3">
          We may use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide, maintain, and improve our Services</li>
          <li>To process transactions and send related information</li>
          <li>To send administrative information, such as order confirmations and updates to our terms and policies</li>
          <li>To personalize your experience and deliver content and product offerings relevant to your interests</li>
          <li>To respond to your comments, questions, and requests</li>
          <li>To send promotional communications, such as special offers and news about new products</li>
          <li>To monitor and analyze trends, usage, and activities in connection with our Services</li>
          <li>To detect, prevent, and address technical issues, fraud, and other illegal activities</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">5. Disclosure of Your Information</h3>
        <p className="mb-3">
          We may disclose your information to the following categories of third parties:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service Providers:</strong> Companies that perform services on our behalf, such as payment processing, order fulfillment, data analysis, email delivery, and customer service.
          </li>
          <li>
            <strong>Business Partners:</strong> Trusted companies with whom we partner to offer certain products, services, or promotions.
          </li>
          <li>
            <strong>Legal Authorities:</strong> Law enforcement, governmental agencies, or authorized third parties in response to a legal request.
          </li>
          <li>
            <strong>Corporate Transactions:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
          </li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">6. Your Choices</h3>
        <p className="mb-3">
          You have certain choices regarding the information we collect and how it is used:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Account Information:</strong> You can review and update your account information by logging into your account settings.
          </li>
          <li>
            <strong>Marketing Communications:</strong> You can opt out of receiving promotional emails by following the unsubscribe instructions in those emails.
          </li>
          <li>
            <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies.
          </li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">7. Data Security</h3>
        <p>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Services.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">8. Children's Privacy</h3>
        <p>
          Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">9. Changes to Our Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. If we make material changes, we will provide notice by posting the updated Privacy Policy on our Services and updating the "Last Updated" date. Your continued use of our Services after any such changes constitutes your acceptance of the new Privacy Policy.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">10. Contact Information</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@serconst.com.
        </p>
      </section>
    </div>
    
    <p className="mt-8 text-gray-500">Last Updated: June 1, 2023</p>
  </div>
);

const ShippingPolicy = () => (
  <div className="legal-content">
    <h2 className="text-2xl font-bold mb-6">Shipping Policy</h2>
    
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-semibold mb-3">1. Shipping Methods and Timeframes</h3>
        <p className="mb-3">
          We offer the following shipping methods for domestic orders within India:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Standard Shipping:</strong> 3-5 business days for major cities, 5-7 business days for other locations.
          </li>
          <li>
            <strong>Express Shipping:</strong> 1-2 business days for major cities, 2-3 business days for other locations.
          </li>
          <li>
            <strong>Same-Day Delivery:</strong> Available in select metro cities for orders placed before 12 PM local time.
          </li>
        </ul>
        <p className="mt-3 mb-3">
          For international shipping, we offer:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Standard International:</strong> 7-14 business days, depending on the destination.
          </li>
          <li>
            <strong>Express International:</strong> 3-5 business days, depending on the destination.
          </li>
        </ul>
        <p className="mt-3">
          Please note that these timeframes are estimates and not guarantees. Shipping times may be affected by factors beyond our control, such as customs processing, weather conditions, or local delivery circumstances.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">2. Shipping Costs</h3>
        <p className="mb-3">
          Shipping costs are calculated based on the shipping method, destination, and order value. The exact shipping cost will be displayed during checkout before you complete your purchase.
        </p>
        <p className="mb-3">
          We offer free standard shipping on domestic orders above ₹999 and free international shipping on orders above ₹4999.
        </p>
        <p>
          Additional charges such as customs duties, taxes, and import fees may apply to international orders. These charges are the responsibility of the recipient and are not included in our shipping fees.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">3. Order Processing</h3>
        <p className="mb-3">
          Orders are typically processed within 24-48 hours after payment confirmation. During sale periods or holidays, processing times may be longer.
        </p>
        <p>
          Once your order has been processed and shipped, you will receive a shipping confirmation email with tracking information, where applicable.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">4. Tracking Your Order</h3>
        <p className="mb-3">
          You can track your order by:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Logging into your account and viewing your order history</li>
          <li>Using the tracking link provided in your shipping confirmation email</li>
          <li>Contacting our customer service team with your order number</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">5. Delivery Issues</h3>
        <p className="mb-3">
          If your package is marked as delivered but you haven't received it, please:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Check with neighbors or others at your address who may have accepted the delivery</li>
          <li>Look around your property for alternative delivery locations</li>
          <li>Wait 24 hours, as sometimes packages are marked as delivered shortly before actual delivery</li>
          <li>Contact our customer service team if you still cannot locate your package</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">6. Lost or Damaged Packages</h3>
        <p>
          In the rare event that your package is lost or damaged during transit, please contact our customer service team within 7 days of the expected delivery date. We will work with the shipping carrier to resolve the issue and may require you to provide information or documentation about the loss or damage.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">7. Address Changes</h3>
        <p>
          If you need to change your shipping address after placing an order, please contact our customer service team as soon as possible. We will try to accommodate your request, but we cannot guarantee that we will be able to change the address if your order has already been processed or shipped.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">8. Contact Information</h3>
        <p>
          If you have any questions about our shipping policy, please contact our customer service team at shipping@serconst.com or call us at +91 8000 123 456.
        </p>
      </section>
    </div>
    
    <p className="mt-8 text-gray-500">Last Updated: June 1, 2023</p>
  </div>
);

const ReturnPolicy = () => (
  <div className="legal-content">
    <h2 className="text-2xl font-bold mb-6">Return & Refund Policy</h2>
    
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-semibold mb-3">1. Return Eligibility</h3>
        <p className="mb-3">
          You may return items purchased from Serconst ("Serconst") within 30 days of delivery, provided that:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The item is unworn, unwashed, and in its original condition</li>
          <li>All original tags and packaging are intact</li>
          <li>You have the original receipt or proof of purchase</li>
          <li>The item is not from our final sale or clearance categories (marked as non-returnable)</li>
          <li>Intimate wear, swimwear, and accessories like jewelry and hair accessories are not eligible for return due to hygiene reasons</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">2. Return Process</h3>
        <p className="mb-3">
          To initiate a return, please follow these steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in to your account and go to your order history</li>
          <li>Select the order containing the item(s) you wish to return</li>
          <li>Click on "Return Items" and follow the instructions</li>
          <li>Print the return shipping label (for prepaid returns) or note the return address</li>
          <li>Pack the item(s) securely in their original packaging if possible</li>
          <li>Attach the return shipping label to the package</li>
          <li>Drop off the package at the nearest authorized courier location or schedule a pickup</li>
        </ol>
        <p className="mt-3">
          Alternatively, you can contact our customer service team at returns@serconst.com or call +91 8000 123 456 for assistance with your return.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">3. Return Shipping</h3>
        <p className="mb-3">
          For domestic returns, we offer:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Free Returns:</strong> For orders above ₹1499, we provide a prepaid return shipping label at no cost to you.
          </li>
          <li>
            <strong>Standard Returns:</strong> For orders below ₹1499, a return shipping fee of ₹99 will be deducted from your refund amount.
          </li>
        </ul>
        <p className="mt-3 mb-3">
          For international returns, the customer is responsible for return shipping costs, and we recommend using a trackable shipping method.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">4. Refund Process</h3>
        <p className="mb-3">
          Once we receive your returned item(s), our team will inspect them to ensure they meet our return eligibility requirements. This process typically takes 2-3 business days.
        </p>
        <p className="mb-3">
          If your return is approved, we will process your refund to the original payment method used for the purchase. Refunds typically appear in your account within:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>3-5 business days for credit/debit cards</li>
          <li>1-2 business days for digital wallets and UPI</li>
          <li>7-10 business days for bank transfers</li>
        </ul>
        <p className="mt-3">
          For cash on delivery orders, refunds will be processed to your Serconst store credit or to a bank account that you provide.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">5. Exchanges</h3>
        <p className="mb-3">
          We currently do not offer direct exchanges. If you wish to exchange an item, please return the original item for a refund and place a new order for the desired item.
        </p>
        <p>
          To expedite this process, you can place the new order before returning the original item, and we will process your refund separately once we receive the return.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">6. Damaged or Defective Items</h3>
        <p className="mb-3">
          If you receive a damaged or defective item, please contact our customer service team within 48 hours of delivery. Please provide:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your order number</li>
          <li>A description of the damage or defect</li>
          <li>Photos of the damaged or defective item</li>
        </ul>
        <p className="mt-3">
          We will arrange for a return shipping label and process a full refund or replacement at no additional cost to you.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-3">7. Contact Information</h3>
        <p>
          If you have any questions about our return and refund policy, please contact our customer service team at returns@serconst.com or call us at +91 8000 123 456.
        </p>
      </section>
    </div>
    
    <p className="mt-8 text-gray-500">Last Updated: June 1, 2023</p>
  </div>
);

const Legal = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    // Set active tab based on current path
    const path = location.pathname.split('/').pop();
    if (path === 'privacy-policy') return 'privacy';
    if (path === 'shipping-policy') return 'shipping';
    if (path === 'return-policy') return 'returns';
    return 'terms'; // Default to terms
  });
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-6 bg-gray-200">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80 flex items-center">
              <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-2xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Legal Information
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-6">
                    Important policies and agreements that govern your use of our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="mb-8 border-b border-gray-200">
        <div className="flex flex-wrap -mb-px">
          <Link 
            to="/legal/terms-of-service"
            className={`inline-block py-4 px-4 md:px-6 text-sm md:text-base font-medium ${activeTab === 'terms' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'}`}
            onClick={() => setActiveTab('terms')}
          >
            Terms of Service
          </Link>
          <Link 
            to="/legal/privacy-policy"
            className={`inline-block py-4 px-4 md:px-6 text-sm md:text-base font-medium ${activeTab === 'privacy' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/legal/shipping-policy"
            className={`inline-block py-4 px-4 md:px-6 text-sm md:text-base font-medium ${activeTab === 'shipping' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'}`}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping Policy
          </Link>
          <Link 
            to="/legal/return-policy"
            className={`inline-block py-4 px-4 md:px-6 text-sm md:text-base font-medium ${activeTab === 'returns' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'}`}
            onClick={() => setActiveTab('returns')}
          >
            Return & Refund Policy
          </Link>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <Routes>
          <Route path="/" element={<Navigate to="/legal/terms-of-service" replace />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="*" element={<Navigate to="/legal/terms-of-service" replace />} />
        </Routes>
      </div>
      
      {/* Contact Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Have Questions?</h2>
          <p className="text-gray-600">
            If you have any questions about our legal policies, please don't hesitate to contact us.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
            Contact Us
          </Link>
          <a href="mailto:legal@serconst.com" className="bg-white text-primary border border-primary font-medium px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
            Email Legal Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Legal;