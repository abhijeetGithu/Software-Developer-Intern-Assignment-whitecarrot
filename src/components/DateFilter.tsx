import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import type { DateRange } from '../types';

interface DateFilterProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export function DateFilter({ dateRange, onDateRangeChange }: DateFilterProps) {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <DatePicker
          selected={dateRange.startDate}
          onChange={(date) =>
            onDateRangeChange({ ...dateRange, startDate: date })
          }
          className="px-3 py-2 border rounded-md"
          placeholderText="Select start date"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Date
        </label>
        <DatePicker
          selected={dateRange.endDate}
          onChange={(date) =>
            onDateRangeChange({ ...dateRange, endDate: date })
          }
          className="px-3 py-2 border rounded-md"
          placeholderText="Select end date"
          minDate={dateRange.startDate}
        />
      </div>
    </div>
  );
}