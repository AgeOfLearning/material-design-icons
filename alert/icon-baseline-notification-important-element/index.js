import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotificationImportantElement
 * @class IconBaselineNotificationImportantElement
 * @extends {AoflElement}
 */
class IconBaselineNotificationImportantElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotificationImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-notification-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotificationImportantElement.is, IconBaselineNotificationImportantElement);

export default IconBaselineNotificationImportantElement;
