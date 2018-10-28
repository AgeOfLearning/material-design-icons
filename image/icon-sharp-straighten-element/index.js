import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStraightenElement
 * @class IconSharpStraightenElement
 * @extends {AoflElement}
 */
class IconSharpStraightenElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStraightenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-straighten';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStraightenElement.is, IconSharpStraightenElement);

export default IconSharpStraightenElement;
