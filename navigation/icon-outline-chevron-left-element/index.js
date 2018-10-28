import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChevronLeftElement
 * @class IconOutlineChevronLeftElement
 * @extends {AoflElement}
 */
class IconOutlineChevronLeftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChevronLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-chevron-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChevronLeftElement.is, IconOutlineChevronLeftElement);

export default IconOutlineChevronLeftElement;
