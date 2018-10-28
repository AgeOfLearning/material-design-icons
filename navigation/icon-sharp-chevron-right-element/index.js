import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChevronRightElement
 * @class IconSharpChevronRightElement
 * @extends {AoflElement}
 */
class IconSharpChevronRightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChevronRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-chevron-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChevronRightElement.is, IconSharpChevronRightElement);

export default IconSharpChevronRightElement;
