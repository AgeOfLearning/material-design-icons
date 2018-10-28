import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpErrorElement
 * @class IconSharpErrorElement
 * @extends {AoflElement}
 */
class IconSharpErrorElement extends AoflElement {
  /**
   * Creates an instance of IconSharpErrorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-error';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpErrorElement.is, IconSharpErrorElement);

export default IconSharpErrorElement;
