import Vue from 'vue'

class Component extends Vue {
  static install(vue: typeof Vue): void
}

declare class FilePreview extends Component {
  fileType: string

  imgPvProps: ImgPreviewerProps

  excelPvProps: ExcelPreviewerProps

  openViewer: (index: number) => void
}

declare class ImgPreviewer extends ImgPreviewerProps {}

declare class ImgPreviewerProps extends Vue {
  coverList?: Array

  previewSrcList: Array

  width?: string

  height?: string

  alt?: string

  viewerOptions?: object
}

declare class ExcelPreviewer extends Component {}

declare class ExcelPreviewerProps extends Vue {
  file: object

  isClientStream?: boolean // judge if client file stream or not

  tableHeight?: string | nubmer
}

export default FilePreview
