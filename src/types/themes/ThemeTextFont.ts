/**
 * A font definition.
 *
 * @group Themes
 */
export type ThemeTextFont = {
  /**
   * Typeface name, e.g. `"Calibri"`.
   *
   * Specifies the name of the font to be used. If this font isn't available, font substitution
   * should be used in order to select an alternate font.
   */
  typeface: string;
  /**
   * PANOSE 1.0 classification as hex. Used to guide selection of a similar alternate font if the
   * chosen font is unavailable.
   *
   * @see {@link https://en.wikipedia.org/wiki/PANOSE}
   */
  panose?: string;
  /**
   * Charset byte value.
   *
   * Specifies the character set supported by the font. Used in font substitution logic to locate an
   * appropriate substitute font when this font isn't available.
   *
   * | Value           | Description                                                 |
   * |-----------------|-------------------------------------------------------------|
   * | 0               | ANSI character set (IANA name `iso-8859-1`)                 |
   * | 1               | Default character set                                       |
   * | 2               | Symbol character set                                        |
   * | 77              | Mac character set (IANA name `macintosh`)                   |
   * | 128             | Shift JIS character set (IANA name `shift_jis`)             |
   * | 129             | Hangul character set (IANA name `ks_c_5601-1987`)           |
   * | 130             | Johab character set (IANA name `KS C-5601-1992`)            |
   * | 134             | GB-2312 character set (IANA name `GBK`)                     |
   * | 136             | Chinese Big Five character set (IANA name `Big5`)           |
   * | 161             | Greek character set (IANA name `windows-1253`)              |
   * | 162             | Turkish character set (IANA name `iso-8859-9`)              |
   * | 163             | Vietnamese character set (IANA name `windows-1258`)         |
   * | 177             | Hebrew character set (IANA name `windows-1255`)             |
   * | 178             | Arabic character set (IANA name `windows-1256`)             |
   * | 186             | Baltic character set (IANA name `windows-1257`)             |
   * | 204             | Russian character set (IANA name `windows-1251`)            |
   * | 222             | Thai character set (IANA name `windows-874`)                |
   * | 238             | Eastern European character set (IANA name `windows-1250`)   |
   * | 255             | Specifies an OEM character set not defined by ISO/IEC 29500 |
   * | Any other value | Application-defined, can be ignored                         |
   */
  charset?: number;
  /**
   * Specifies the font pitch.
   *
   * | Value | Description                             |
   * |------:|-----------------------------------------|
   * |  0    | Default pitch + unknown font family     |
   * |  1    | Fixed pitch + unknown font family       |
   * |  2    | Variable pitch + unknown font family    |
   * | 16    | Default pitch + roman font family       |
   * | 17    | Fixed pitch + roman font family         |
   * | 18    | Variable pitch + roman font family      |
   * | 32    | Default pitch + Swiss font family       |
   * | 33    | Fixed pitch + Swiss font family         |
   * | 34    | Variable pitch + Swiss font family      |
   * | 48    | Default pitch + modern font family      |
   * | 49    | Fixed pitch + modern font family        |
   * | 50    | Variable pitch + modern font family     |
   * | 64    | Default pitch + script font family      |
   * | 65    | Fixed pitch + script font family        |
   * | 66    | Variable pitch + script font family     |
   * | 80    | Default pitch + decorative font family  |
   * | 81    | Fixed pitch + decorative font family    |
   * | 82    | Variable pitch + decorative font family |
   */
  pitchFamily?: number;
};
