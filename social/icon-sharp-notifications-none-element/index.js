import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotificationsNoneElement
 * @class IconSharpNotificationsNoneElement
 * @extends {AoflElement}
 */
class IconSharpNotificationsNoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotificationsNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-notifications-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotificationsNoneElement.is, IconSharpNotificationsNoneElement);

export default IconSharpNotificationsNoneElement;
