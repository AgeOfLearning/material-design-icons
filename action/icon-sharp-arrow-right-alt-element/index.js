import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowRightAltElement
 * @class IconSharpArrowRightAltElement
 * @extends {AoflElement}
 */
class IconSharpArrowRightAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowRightAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-right-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowRightAltElement.is, IconSharpArrowRightAltElement);

export default IconSharpArrowRightAltElement;
