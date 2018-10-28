import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExplicitElement
 * @class IconOutlineExplicitElement
 * @extends {AoflElement}
 */
class IconOutlineExplicitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExplicitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-explicit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExplicitElement.is, IconOutlineExplicitElement);

export default IconOutlineExplicitElement;
