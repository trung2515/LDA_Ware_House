import { Injectable } from '@angular/core';
import { exportDataGrid, exportPivotGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import * as saveAs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() {}
  // grid
  onExportingExcelGrid(e: any, fileName?: string, heading?: string) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(fileName || 'report-name');

    worksheet.columns = [
      { header: 'ca', key: 'ca', width: 5 },
      { header: '', key: 'date', width: 10 },
      { width: 20 },
      { width: 15 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
      { width: 20 }
    ];

    exportDataGrid({
      component: e.component,
      worksheet,
      keepColumnWidths: true,
      topLeftCell: { row: 4, column: 1 },
      customizeCell: ({ gridCell, excelCell }) => {
        if (gridCell.rowType === 'header') {
          if (excelCell.value) {
            excelCell.font = { italic: true, bgColor: { argb: 'ff0000' } };
          }
        }
        if (gridCell.rowType === 'data') {
          excelCell.alignment = { horizontal: 'left' };
          excelCell.font = { color: { argb: '000' }, underline: false };
          if (gridCell.column.dataField === 'ca') {
            excelCell.alignment = { vertical: 'center' };
          }
          if (gridCell.column.dataField === 'bagging_machine') {
            excelCell.fill = {
              type: 'pattern',
              pattern: 'darkVertical',
              bgColor:
                excelCell._value.model.value === 'A'
                  ? { argb: 'E7F0FF' }
                  : { argb: 'E5E5E5' }
            };
          }
        }
      }
    }).then(() => {
      const headerRow = worksheet.getRow(2);
      headerRow.height = 30;
      worksheet.mergeCells(2, 2, 2, 8);

      headerRow.getCell(2).value =
        heading || 'Báo cáo số lượng trên máy đóng bao';
      headerRow.getCell(2).alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true
      };
      headerRow.getCell(2).font = {
        color: { argb: '000000' },
        size: 14,
        bold: true
      };

      workbook.xlsx.writeBuffer().then(buffer => {
        saveAs(
          new Blob([buffer], { type: 'application/octet-stream' }),
          fileName + '.xlsx'
        );
      });
    });
    e.cancel = true;
  }

  phoneNumberFormat(value: any) {
    const USNumber = value.match(/(\d{3})(\d{3})(\d{4})/);

    return `(${USNumber[1]}) ${USNumber[2]}-${USNumber[3]}`;
  }

  // pivot
  onExportingExcelPivot(
    e: any,
    fileName?: string,
    heading?: string,
    rows: string[] = []
  ) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(fileName || 'Báo cáo vận chuyển');

    exportPivotGrid({
      component: e.component,
      worksheet,
      keepColumnWidths: true,
      topLeftCell: { row: 3, column: 1 },
      customizeCell: ({ pivotCell, excelCell }) => {
        if (this.isDataCell(pivotCell) || this.isTotalCell(pivotCell)) {
          const appearance: any = this.getConditionalAppearance(pivotCell);
          Object.assign(excelCell, this.getExcelCellFormat(appearance));
        }

        const borderStyle = { style: 'thin', color: { argb: 'FF7E7E7E' } };
        excelCell.border = {
          bottom: borderStyle,
          left: borderStyle,
          right: borderStyle,
          top: borderStyle
        };
      }
    }).then(() => {
      const headerRow = worksheet.getRow(2);
      headerRow.height = 30;
      worksheet.mergeCells(2, 1, 1, 3);

      headerRow.getCell(1).value = heading || 'Báo cáo vận chuyển';
      headerRow.getCell(1).alignment = {
        horizontal: 'center',
        vertical: 'middle'
      };
      headerRow.getCell(1).font = {
        color: { argb: '000000' },
        size: 14,
        bold: true
      };

      const rowGroup = worksheet.getRow(4);
      const rowGroupUnder = worksheet.getRow(3);
      worksheet.unMergeCells('A3:A4');

      // create new sheet with pageSetup settings for A4 - landscape
      rows.forEach((row: string, index: number) => {
        rowGroup.getCell(index + 1).value = row;
        rowGroup.getCell(index + 1).font = {
          color: { argb: '000000' },
          size: 11,
          bold: true
        };
        rowGroup.getCell(index + 1).alignment = {
          horizontal: 'center'
        };
        rowGroup.getCell(index + 1).border = {
          top: { style: 'thin' },
          right: { style: 'thin' },
          bottom: { style: 'thin' },
          left: { style: 'thin' }
        };
        rowGroupUnder.getCell(index + 1).border = {
          top: { style: 'thin' },
          right: { style: 'thin' },
          bottom: { style: 'thin' },
          left: { style: 'thin' }
        };
      });

      workbook.xlsx.writeBuffer().then(buffer => {
        saveAs(
          new Blob([buffer], { type: 'application/octet-stream' }),
          fileName + '.xlsx'
        );
      });
    });
    e.cancel = true;
  }

  onCellPrepared({
    cell,
    area,
    cellElement
  }: {
    cell: any;
    area: any;
    cellElement: any;
  }): void {
    cell.area = area;
    if (this.isDataCell(cell) || this.isTotalCell(cell)) {
      const appearance: any = this.getConditionalAppearance(cell);
      Object.assign(cellElement.style, this.getCssStyles(appearance));
    }
  }

  isDataCell(cell: any) {
    return (
      cell.area === 'data' && cell.rowType === 'D' && cell.columnType === 'D'
    );
  }

  isTotalCell(cell: any) {
    return (
      cell.type === 'T' ||
      cell.type === 'GT' ||
      cell.rowType === 'T' ||
      cell.rowType === 'GT' ||
      cell.columnType === 'T' ||
      cell.columnType === 'GT'
    );
  }

  getExcelCellFormat({
    fill,
    font,
    bold
  }: {
    fill: any;
    font: any;
    bold: any;
  }) {
    return {
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: fill } },
      font: { color: { argb: font }, bold }
    };
  }

  getCssStyles({ fill, font, bold }: { fill: any; font: any; bold: any }) {
    return {
      'background-color': `#${fill}`,
      color: `#${font}`,
      'font-weight': bold ? 'bold' : undefined,
      width: 50
    };
  }

  getConditionalAppearance(cell: any) {
    if (this.isTotalCell(cell)) {
      return { fill: 'F2F2F2', font: '3F3F3F', bold: true };
    }
    const { value } = cell;
    if (value < 20000) {
      return { font: '9C0006', fill: 'FFC7CE' };
    }
    if (value > 50000) {
      return { font: '006100', fill: 'C6EFCE' };
    }

    return { font: '9C6500', fill: 'FFEB9C' };
  }
}
