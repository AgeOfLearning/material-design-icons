import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotificationsElement
 * @class IconBaselineNotificationsElement
 * @extends {AoflElement}
 */
class IconBaselineNotificationsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotificationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-notifications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotificationsElement.is, IconBaselineNotificationsElement);

export default IconBaselineNotificationsElement;
