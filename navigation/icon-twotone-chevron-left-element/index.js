import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChevronLeftElement
 * @class IconTwotoneChevronLeftElement
 * @extends {AoflElement}
 */
class IconTwotoneChevronLeftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChevronLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-chevron-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChevronLeftElement.is, IconTwotoneChevronLeftElement);

export default IconTwotoneChevronLeftElement;
