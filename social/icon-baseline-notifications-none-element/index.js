import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotificationsNoneElement
 * @class IconBaselineNotificationsNoneElement
 * @extends {AoflElement}
 */
class IconBaselineNotificationsNoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotificationsNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-notifications-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotificationsNoneElement.is, IconBaselineNotificationsNoneElement);

export default IconBaselineNotificationsNoneElement;
