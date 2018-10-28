import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotificationsPausedElement
 * @class IconBaselineNotificationsPausedElement
 * @extends {AoflElement}
 */
class IconBaselineNotificationsPausedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotificationsPausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-notifications-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotificationsPausedElement.is, IconBaselineNotificationsPausedElement);

export default IconBaselineNotificationsPausedElement;
