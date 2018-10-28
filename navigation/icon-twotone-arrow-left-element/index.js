import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowLeftElement
 * @class IconTwotoneArrowLeftElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowLeftElement.is, IconTwotoneArrowLeftElement);

export default IconTwotoneArrowLeftElement;
