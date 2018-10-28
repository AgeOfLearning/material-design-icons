import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlipToFrontElement
 * @class IconSharpFlipToFrontElement
 * @extends {AoflElement}
 */
class IconSharpFlipToFrontElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlipToFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flip-to-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlipToFrontElement.is, IconSharpFlipToFrontElement);

export default IconSharpFlipToFrontElement;
