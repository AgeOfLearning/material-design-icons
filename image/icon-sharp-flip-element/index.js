import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlipElement
 * @class IconSharpFlipElement
 * @extends {AoflElement}
 */
class IconSharpFlipElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flip';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlipElement.is, IconSharpFlipElement);

export default IconSharpFlipElement;
