import { memo } from "react";
import type IEducation from "../../Interfaces/UEducation";

interface EducationProps {
  experience: IEducation;
}

const Education = memo(function Education({ experience }: EducationProps) {
  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        <div className="row align-items-center gx-5">
          <div className="col text-center text-lg-start mb-4 mb-lg-0">
            <div className="bg-light p-4 rounded-4">
              <div className="text-primary fw-bolder mb-2">
                {experience.start_date} - {experience.end_date}
              </div>
              <div className="small fw-bolder">{experience.university_name}</div>
              <div className="small text-muted">{experience.location}</div>
              <div className="small text-muted">{experience.education_department}</div>
            </div>
          </div>
          <div className="col-lg-8">
            <div>{experience.overwiev}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Education;