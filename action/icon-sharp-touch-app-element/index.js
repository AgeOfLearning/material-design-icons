import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTouchAppElement
 * @class IconSharpTouchAppElement
 * @extends {AoflElement}
 */
class IconSharpTouchAppElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTouchAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-touch-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTouchAppElement.is, IconSharpTouchAppElement);

export default IconSharpTouchAppElement;
