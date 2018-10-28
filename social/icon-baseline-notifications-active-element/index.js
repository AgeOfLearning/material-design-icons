import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotificationsActiveElement
 * @class IconBaselineNotificationsActiveElement
 * @extends {AoflElement}
 */
class IconBaselineNotificationsActiveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotificationsActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-notifications-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotificationsActiveElement.is, IconBaselineNotificationsActiveElement);

export default IconBaselineNotificationsActiveElement;
