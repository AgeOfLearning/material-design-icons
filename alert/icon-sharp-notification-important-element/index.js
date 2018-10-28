import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotificationImportantElement
 * @class IconSharpNotificationImportantElement
 * @extends {AoflElement}
 */
class IconSharpNotificationImportantElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotificationImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-notification-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotificationImportantElement.is, IconSharpNotificationImportantElement);

export default IconSharpNotificationImportantElement;
