import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloseElement
 * @class IconTwotoneCloseElement
 * @extends {AoflElement}
 */
class IconTwotoneCloseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-close';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloseElement.is, IconTwotoneCloseElement);

export default IconTwotoneCloseElement;
