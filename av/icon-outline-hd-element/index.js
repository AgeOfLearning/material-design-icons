import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHdElement
 * @class IconOutlineHdElement
 * @extends {AoflElement}
 */
class IconOutlineHdElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hd';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHdElement.is, IconOutlineHdElement);

export default IconOutlineHdElement;
