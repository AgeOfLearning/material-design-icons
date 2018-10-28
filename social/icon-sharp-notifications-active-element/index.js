import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotificationsActiveElement
 * @class IconSharpNotificationsActiveElement
 * @extends {AoflElement}
 */
class IconSharpNotificationsActiveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotificationsActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-notifications-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotificationsActiveElement.is, IconSharpNotificationsActiveElement);

export default IconSharpNotificationsActiveElement;
