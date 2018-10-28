import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotificationImportantElement
 * @class IconTwotoneNotificationImportantElement
 * @extends {AoflElement}
 */
class IconTwotoneNotificationImportantElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotificationImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-notification-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotificationImportantElement.is, IconTwotoneNotificationImportantElement);

export default IconTwotoneNotificationImportantElement;
