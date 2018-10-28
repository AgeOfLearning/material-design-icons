import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStyleElement
 * @class IconTwotoneStyleElement
 * @extends {AoflElement}
 */
class IconTwotoneStyleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStyleElement.is, IconTwotoneStyleElement);

export default IconTwotoneStyleElement;
