import type { GUID } from '../guid';

/**
 * An author of a threaded comment, or a person mentioned in a threaded comment.
 */
export type Person = {
  /** The person's unique id. */
  id: GUID,
  /** The person's name as it should be shown to other users. */
  displayName: string,
  /**
   * Optional provider-issued user identifier that varies in format depending on the provider. See
   * {@link Person.providerId} for details on possible values.
   */
  userId?: string,
  /**
   * Specifies where the person's information came from. Excel supports the following values:
   *
   * - `None`: no specific provider; {@link Person.userId} is expected to be the person's name.
   * - `AD`: Active Directory; {@link Person.userId} will be Active Directory id.
   * - `Windows Live`: Microsoft account; {@link Person.userId} will be a 64-bit signed decimal.
   * - `PeoplePicker`: SharePoint People Picker; {@link Person.userId} will be an email address.
   */
  providerId?: string;
};
