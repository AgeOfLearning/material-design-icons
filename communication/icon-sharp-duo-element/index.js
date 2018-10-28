import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDuoElement
 * @class IconSharpDuoElement
 * @extends {AoflElement}
 */
class IconSharpDuoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDuoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-duo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDuoElement.is, IconSharpDuoElement);

export default IconSharpDuoElement;
