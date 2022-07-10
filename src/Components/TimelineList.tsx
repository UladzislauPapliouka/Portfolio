import React, {FC} from "react";
import TimelineStyles from "./Timeline.module.scss";

interface Props {
  events: Array<{
    start: number | string
    end: number | string
    title: string
    description: string
  }>,
  timelineTitle:string
}

export const TimelineList: FC<Props> = ({
  events,
  timelineTitle,
}) => {
  return (
    <div className={TimelineStyles.timeline}>
      <span className={"class-title-span"}>{timelineTitle}</span>
      {events.map((event, i) => (
        <div key={i}>
          <span>{`${event.start} - ${event.end}`}</span>
          <span>{event.title}</span>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};
