import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowLeftElement
 * @class IconOutlineArrowLeftElement
 * @extends {AoflElement}
 */
class IconOutlineArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowLeftElement.is, IconOutlineArrowLeftElement);

export default IconOutlineArrowLeftElement;
