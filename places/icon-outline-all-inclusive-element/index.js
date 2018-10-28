import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAllInclusiveElement
 * @class IconOutlineAllInclusiveElement
 * @extends {AoflElement}
 */
class IconOutlineAllInclusiveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAllInclusiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-all-inclusive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAllInclusiveElement.is, IconOutlineAllInclusiveElement);

export default IconOutlineAllInclusiveElement;
