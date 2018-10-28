import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotificationImportantElement
 * @class IconOutlineNotificationImportantElement
 * @extends {AoflElement}
 */
class IconOutlineNotificationImportantElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotificationImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-notification-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotificationImportantElement.is, IconOutlineNotificationImportantElement);

export default IconOutlineNotificationImportantElement;
