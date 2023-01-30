from datetime import datetime, date


def time_in_seconds_now():
    current_ts = datetime.timestamp(datetime.now())
    jan_first_this = datetime.timestamp(
        datetime(date.today().year, 1, 1, 0, 0, 0, 0))
    jan_first_next = datetime.timestamp(
        datetime(date.today().year + 1, 1, 1, 0, 0, 0, 0))
    total_this_year = jan_first_next - jan_first_this
    ts_elapsed = current_ts - jan_first_this

    print(round(ts_elapsed * 100/total_this_year, 2))


time_in_seconds_now()
