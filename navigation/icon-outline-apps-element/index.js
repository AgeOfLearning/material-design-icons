import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAppsElement
 * @class IconOutlineAppsElement
 * @extends {AoflElement}
 */
class IconOutlineAppsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAppsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-apps';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAppsElement.is, IconOutlineAppsElement);

export default IconOutlineAppsElement;
