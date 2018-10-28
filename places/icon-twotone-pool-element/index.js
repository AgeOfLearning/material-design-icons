import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePoolElement
 * @class IconTwotonePoolElement
 * @extends {AoflElement}
 */
class IconTwotonePoolElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePoolElement.is, IconTwotonePoolElement);

export default IconTwotonePoolElement;
