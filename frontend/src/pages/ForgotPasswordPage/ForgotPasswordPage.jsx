import React from "react";
import VerificationForm from "../../components/ForgotPassword/VerificationForm.jsx";
import ForgotPasswordForm from "../../components/ForgotPassword/ForgotPasswordForm";

import { useState } from "react";

const ForgotPasswordPage = () => {
  const [showVerificationForm, setShowVerificationForm] = useState(false);

  return showVerificationForm ? (
    <VerificationForm />
  ) : (
    <ForgotPasswordForm onSuccess={() => setShowVerificationForm(true)} />
  );
};

export default ForgotPasswordPage;
