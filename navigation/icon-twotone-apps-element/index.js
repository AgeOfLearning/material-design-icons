import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAppsElement
 * @class IconTwotoneAppsElement
 * @extends {AoflElement}
 */
class IconTwotoneAppsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAppsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-apps';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAppsElement.is, IconTwotoneAppsElement);

export default IconTwotoneAppsElement;
