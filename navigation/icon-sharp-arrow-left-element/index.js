import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowLeftElement
 * @class IconSharpArrowLeftElement
 * @extends {AoflElement}
 */
class IconSharpArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowLeftElement.is, IconSharpArrowLeftElement);

export default IconSharpArrowLeftElement;
