import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChevronLeftElement
 * @class IconSharpChevronLeftElement
 * @extends {AoflElement}
 */
class IconSharpChevronLeftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChevronLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-chevron-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChevronLeftElement.is, IconSharpChevronLeftElement);

export default IconSharpChevronLeftElement;
