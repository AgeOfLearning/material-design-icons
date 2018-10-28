import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAppsElement
 * @class IconSharpAppsElement
 * @extends {AoflElement}
 */
class IconSharpAppsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAppsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-apps';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAppsElement.is, IconSharpAppsElement);

export default IconSharpAppsElement;
