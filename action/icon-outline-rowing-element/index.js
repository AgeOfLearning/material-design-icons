import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRowingElement
 * @class IconOutlineRowingElement
 * @extends {AoflElement}
 */
class IconOutlineRowingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRowingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rowing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRowingElement.is, IconOutlineRowingElement);

export default IconOutlineRowingElement;
