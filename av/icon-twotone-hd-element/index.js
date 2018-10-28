import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHdElement
 * @class IconTwotoneHdElement
 * @extends {AoflElement}
 */
class IconTwotoneHdElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hd';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHdElement.is, IconTwotoneHdElement);

export default IconTwotoneHdElement;
