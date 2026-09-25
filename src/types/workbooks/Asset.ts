/* eslint-disable max-len */
/**
  * A binary asset owned by this workbook.
  *
  * A client may encode whatever content they need to keep around. This can be useful for preserving
  * VBA, PowerQuery, or extended Charts through to re-export even if the consumers don't support
  *
  * The following is a table of some of the formats you may be expected to encounter:
  *
  *  | Extension               | MIME type                              | Common name
  *  |-------------------------|--------------------------------------- |-------------
  *  | `.png`                  | `image/png`                            | Portable Network Graphics
  *  | `.jpg`, `.jpeg`         | `image/jpeg`                           | JPEG
  *  | `.gif`                  | `image/gif`                            | Graphics Interchange Format
  *  | `.emf`                  | `image/emf`                            | Enhanced Metafile
  *  | `.wmf`                  | `image/wmf`                            | Windows Metafile
  *  | `.wdp`, `.jxr`, `.hdp`  | `image/vnd.ms-photo`                   | Windows Media Photo / JPEG XR
  *  | `.bmp`                  | `image/bmp`                            | Bitmap
  *  | `.tif`, `.tiff`         | `image/tiff`                           | Tagged Image File Format
  *  | `.svg`                  | `image/svg+xml`                        | Scalable Vector Graphics
  *  | `.bin`                  | `application/vnd.ms-office.vbaProject` | VBA project
  *
  * @see {@link https://en.wikipedia.org/wiki/Data_URI_scheme}
  * @see {@link https://www.rfc-editor.org/rfc/rfc2397}
  */
export type Asset = {
  /**
   * A unique identifier for the resource.
   *
   * For images, the id's might be the file paths of the images used to refer to them, commonly
   * these will be the `mediaId` properties on drawing objects.
   */
  id: string;
  /**
   * A data URI of the content.
   */
  data: string;
  /**
   * A descriptive attribute attached to the asset in order to define its type, or the relationship
   * between it and its referring resources.
   */
  rel?: string;
};
