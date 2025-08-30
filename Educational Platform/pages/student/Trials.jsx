import TrailsStatisticsCard from "../../src/components/cards/TrailsStatisticsCard";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

export default function Trials() {
  return (
    <>
      <div className="header">
        <h2>التجارب والاختبارات</h2>
        <p>عرض جميع التجارب والنتائج</p>
      </div>
      <div className="statistics">
        <TrailsStatisticsCard icon={<EmojiEventsOutlinedIcon />} />
      </div>
    </>
  );
}
