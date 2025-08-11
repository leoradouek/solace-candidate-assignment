import { Advocate } from "@/types/advocates";
import SpecialtiesCell from "./SpecialtiesCell";

type Props = {
  advocates: Advocate[];
};

export default function AdvocatesTable({ advocates }: Props) {
  const cellClassName = "px-4 py-2 text-left max-w-[200px]"

  return (
    <table className="w-[95vw] cursor-default">
      <thead className="sticky top-[174px] bg-[#415550]">
        <tr className="bg-[#415550]" >
          <th className={cellClassName}>Last Name</th>
          <th className={cellClassName}>First Name</th>
          <th className={cellClassName}>City</th>
          <th className={cellClassName}>Degree</th>
          <th className={cellClassName}>Specialties</th>
          <th className={`${cellClassName} w-[90px]`}>Years of Experience</th>
          <th className={cellClassName}>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate, idx) => (
          <tr
            key={idx}
            className={idx % 2 === 0 ? "bg-[#1d4339]" : "bg-[#415550]"}
          >
            <td className={cellClassName}>{advocate.lastName}</td>
            <td className={cellClassName}>{advocate.firstName}</td>
            <td className={cellClassName}>{advocate.city}</td>
            <td className={cellClassName}>{advocate.degree}</td>
            <td className={`${cellClassName} max-w-[200px] pr-16`}><SpecialtiesCell specialties={advocate.specialties}/></td>
            <td className={`${cellClassName} w-[90px]`}>{advocate.yearsOfExperience}</td>
            <td className={cellClassName}>{advocate.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
