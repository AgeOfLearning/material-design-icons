import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPortraitElement
 * @class IconSharpPortraitElement
 * @extends {AoflElement}
 */
class IconSharpPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPortraitElement.is, IconSharpPortraitElement);

export default IconSharpPortraitElement;
