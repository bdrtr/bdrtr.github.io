import { memo } from "react";

interface LanguageProps {
  language: string;
}

const Language = memo(function Language({ language }: LanguageProps) {
  return (
    <div className="col mb-4 mb-md-0">
      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
        {language}
      </div>
    </div>
  );
});

export default Language;