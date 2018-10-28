import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatBoldElement
 * @class IconSharpFormatBoldElement
 * @extends {AoflElement}
 */
class IconSharpFormatBoldElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatBoldElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-bold';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatBoldElement.is, IconSharpFormatBoldElement);

export default IconSharpFormatBoldElement;
