import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOutlinedFlagElement
 * @class IconSharpOutlinedFlagElement
 * @extends {AoflElement}
 */
class IconSharpOutlinedFlagElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOutlinedFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-outlined-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOutlinedFlagElement.is, IconSharpOutlinedFlagElement);

export default IconSharpOutlinedFlagElement;
