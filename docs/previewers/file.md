# file-previewer

## Props

| prop         | type   | default | optional  | description                                      |
| ------------ | ------ | ------- | --------- | ------------------------------------------------ |
| fileType     | string |         | img/excel | choose which previewer to use                    |
| imgPvProps   | object |         |           | [props of img-previewer](/previewers/img.md)     |
| excelPvProps | object |         |           | [props of excel-previewer](/previewers/excel.md) |

## Methods

| Methods    | Description                                                                           | Parameters |
| ---------- | ------------------------------------------------------------------------------------- | ---------- |
| openViewer | when `fileType` is `excel` it works, same as [openViewer](/previewers/img.md#methods) | index      |
