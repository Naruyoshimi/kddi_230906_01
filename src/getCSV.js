import React from "react";
import "./styles.css";
import ExcelJS from "exceljs";

export const App: React.FC = () => {
  const handlerClickDownloadButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format: "xlsx" | "csv"
  ) => {
    e.preventDefault();

    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("sheet1");
    const worksheet = workbook.getWorksheet("sheet1");

    worksheet.columns = [
      { header: "ID", key: "id" },
      { header: "作成日時", key: "createdAt" },
      { header: "名前", key: "name" }
    ];

    worksheet.addRows([
      {
        id: "f001",
        createdAt: 1629902208,
        name: "りんご"
      },
      {
        id: "f002",
        createdAt: 1629902245,
        name: "ぶとう"
      },
      {
        id: "f003",
        createdAt: 1629902265,
        name: "ばなな"
      }
    ]);

    const uint8Array =
      format === "xlsx"
        ? await workbook.xlsx.writeBuffer(); //xlsxの場合
        : await workbook.csv.writeBuffer(); //csvの場合
    const blob = new Blob([uint8Array], { type: "application/octet-binary" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sampleData." + format; //フォーマットによってファイル拡張子を変えている
    a.click();
    a.remove();
  };
  return (
    <>
      <header>
        <h1>データ出力</h1>
      </header>
      <>
        <button onClick={(e) => handlerClickDownloadButton(e, "xlsx")}>
          Excel形式
        </button>
        <button onClick={(e) => handlerClickDownloadButton(e, "csv")}>
          CSV形式
        </button>
      </>
    </>
  );
};