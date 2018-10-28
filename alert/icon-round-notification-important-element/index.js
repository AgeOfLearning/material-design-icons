import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotificationImportantElement
 * @class IconRoundNotificationImportantElement
 * @extends {AoflElement}
 */
class IconRoundNotificationImportantElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotificationImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-notification-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotificationImportantElement.is, IconRoundNotificationImportantElement);

export default IconRoundNotificationImportantElement;
