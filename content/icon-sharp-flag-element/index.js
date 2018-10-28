import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlagElement
 * @class IconSharpFlagElement
 * @extends {AoflElement}
 */
class IconSharpFlagElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlagElement.is, IconSharpFlagElement);

export default IconSharpFlagElement;
