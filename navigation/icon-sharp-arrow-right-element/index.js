import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowRightElement
 * @class IconSharpArrowRightElement
 * @extends {AoflElement}
 */
class IconSharpArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowRightElement.is, IconSharpArrowRightElement);

export default IconSharpArrowRightElement;
