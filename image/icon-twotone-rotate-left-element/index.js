import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRotateLeftElement
 * @class IconTwotoneRotateLeftElement
 * @extends {AoflElement}
 */
class IconTwotoneRotateLeftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRotateLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rotate-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRotateLeftElement.is, IconTwotoneRotateLeftElement);

export default IconTwotoneRotateLeftElement;
