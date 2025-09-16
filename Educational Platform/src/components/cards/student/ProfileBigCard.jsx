import ProfileProgressBar from "../../comon/profileProgressBar";
import "../../../../styles/profileBigCard.css";
export default function ProfileBigCard() {
  return (
    <>
      <div
        className="profileBigCard card py-3 px-4"
        style={{
          backgroundColor: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <h5 className="mb-4" style={{ color: "hsl(var(--foreground))" }}>
          تقدم المواد الدراسية
        </h5>
        <ProfileProgressBar currentGrade="90" name="الرياضيات" />
        <ProfileProgressBar currentGrade="85" name="الفيزياء" />
        <ProfileProgressBar currentGrade="80" name="الكيمياء" />
        <ProfileProgressBar currentGrade="95" name="البرمجة" />
      </div>
    </>
  );
}
