import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePoolElement
 * @class IconOutlinePoolElement
 * @extends {AoflElement}
 */
class IconOutlinePoolElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePoolElement.is, IconOutlinePoolElement);

export default IconOutlinePoolElement;
