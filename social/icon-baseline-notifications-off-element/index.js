import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotificationsOffElement
 * @class IconBaselineNotificationsOffElement
 * @extends {AoflElement}
 */
class IconBaselineNotificationsOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotificationsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-notifications-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotificationsOffElement.is, IconBaselineNotificationsOffElement);

export default IconBaselineNotificationsOffElement;
