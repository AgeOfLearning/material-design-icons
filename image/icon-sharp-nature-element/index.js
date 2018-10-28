import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNatureElement
 * @class IconSharpNatureElement
 * @extends {AoflElement}
 */
class IconSharpNatureElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNatureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-nature';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNatureElement.is, IconSharpNatureElement);

export default IconSharpNatureElement;
