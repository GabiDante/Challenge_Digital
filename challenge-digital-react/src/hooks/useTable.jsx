import { useState } from 'react';

const useTable = () => {
  const [th, setTh] = useState([]);
  const [data, setData] = useState([]);
  const [showonly, setShowOnly] = useState([]);

  const Table = () => (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {th.map((content) => (
            <th key={content} className="border px-8 py-4 text-center">
              {content}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((content) => {
          const dataKeys = Object.keys(content);
          const dataValue = Object.values(content);

          let dataFiltered = [];

          for (let i = 0; i < dataKeys.length; i++) {
            for (let x = 0; x < showonly.length; x++) {
              if (dataKeys[i] === showonly[x]) {
                dataFiltered = [
                  ...dataFiltered,
                  {
                    data: dataValue[i],
                    id: Math.random().toString(36).slice(2),
                  },
                ];
              }
            }
          }
          if (!content.deleted) {
            return (
              <tr key={content.id}>
                {dataFiltered.map(({ id, data }) => (
                  <td
                    key={id}
                    className="border px-4 py-4 text-center text-gray-600"
                  >
                    {data}
                  </td>
                ))}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );

  return { Table, setTh, setData, setShowOnly };
};

export default useTable;
