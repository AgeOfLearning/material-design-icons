import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPanToolElement
 * @class IconSharpPanToolElement
 * @extends {AoflElement}
 */
class IconSharpPanToolElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPanToolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pan-tool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPanToolElement.is, IconSharpPanToolElement);

export default IconSharpPanToolElement;
